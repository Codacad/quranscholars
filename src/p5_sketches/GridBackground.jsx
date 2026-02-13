import { useEffect, useRef } from "react";
import p5 from "p5";

const GridBackground = ({ dimensions }) => {
  const elemRef = useRef();

  useEffect(() => {
    const canvasWidth = Math.max(
      320,
      dimensions?.width || elemRef.current?.clientWidth || 640,
    );
    const canvasHeight = Math.max(
      280,
      dimensions?.height || elemRef.current?.clientHeight || 420,
    );

    const sketch = (p) => {
      const colors = {
        top: [255, 250, 246],
        mid: [255, 244, 238],
        bottom: [255, 236, 232],
        gold: [228, 166, 74],
        teal: [83, 178, 161],
        rose: [223, 122, 155],
        white: [255, 255, 255],
        ink: [98, 84, 94],
      };

      let stars = [];
      let nodes = [];
      let glows = [];
      let nebulaOrbs = [];
      let reduceMotion = false;

      const buildScene = () => {
        const starCount = Math.max(140, Math.floor((p.width * p.height) / 5600));
        stars = Array.from({ length: starCount }, () => ({
          x: p.random(0, p.width),
          y: p.random(0, p.height * 0.8),
          size: p.random(1.2, 3.4),
          twinkle: p.random(0.01, 0.03),
          phase: p.random(0, p.TWO_PI),
          tint: p.random([
            [196, 129, 33],
            [36, 153, 136],
            [190, 82, 122],
            [126, 92, 55],
          ]),
        }));

        const nodeCount = Math.max(16, Math.floor(p.width / 90));
        nodes = Array.from({ length: nodeCount }, () => ({
          x: p.random(p.width * 0.08, p.width * 0.92),
          y: p.random(p.height * 0.16, p.height * 0.68),
          pulse: p.random(0.008, 0.016),
          phase: p.random(0, p.TWO_PI),
        }));

        glows = [
          { x: p.width * 0.18, y: p.height * 0.18, r: p.width * 0.19, color: colors.teal, alpha: 10 },
          { x: p.width * 0.8, y: p.height * 0.22, r: p.width * 0.22, color: colors.rose, alpha: 10 },
          { x: p.width * 0.58, y: p.height * 0.7, r: p.width * 0.28, color: colors.gold, alpha: 9 },
        ];

        nebulaOrbs = Array.from({ length: 7 }, () => ({
          x: p.random(p.width * 0.06, p.width * 0.94),
          y: p.random(p.height * 0.12, p.height * 0.9),
          r: p.random(90, 170),
          driftX: p.random(-0.06, 0.06),
          driftY: p.random(-0.04, 0.04),
          hue: p.random([colors.teal, colors.rose, colors.gold]),
          alpha: p.random(5, 11),
        }));
      };

      const drawSkyGradient = () => {
        for (let y = 0; y < p.height; y += 2) {
          const mix = y / p.height;
          const c1 = p.lerpColor(p.color(...colors.top), p.color(...colors.mid), Math.min(mix * 1.6, 1));
          const c2 = p.lerpColor(c1, p.color(...colors.bottom), Math.max(0, mix - 0.45) * 1.8);
          p.stroke(c2);
          p.line(0, y, p.width, y);
        }
      };

      const drawGlow = (item) => {
        for (let i = 5; i > 0; i -= 1) {
          const rr = (item.r * i) / 5;
          p.noStroke();
          p.fill(item.color[0], item.color[1], item.color[2], item.alpha * (i / 8));
          p.circle(item.x, item.y, rr);
        }
      };

      const drawConstellation = (t) => {
        nodes.forEach((node) => {
          const pulse = 1 + (reduceMotion ? 0 : Math.sin(t * node.pulse + node.phase) * 0.3);
          p.noStroke();
          p.fill(colors.gold[0], colors.gold[1], colors.gold[2], 68);
          p.circle(node.x, node.y, 2.8 * pulse);

          p.fill(colors.white[0], colors.white[1], colors.white[2], 40);
          p.circle(node.x, node.y, 6.8 * pulse);
        });
      };

      const drawStars = (t) => {
        stars.forEach((star) => {
          const shimmer = reduceMotion ? 1 : 0.6 + 0.4 * Math.sin(t * star.twinkle + star.phase);
          const coreSize = star.size * shimmer;

          p.noStroke();
          p.fill(star.tint[0], star.tint[1], star.tint[2], 16 + shimmer * 30);
          p.circle(star.x, star.y, coreSize * 2.4);

          p.noStroke();
          p.fill(star.tint[0], star.tint[1], star.tint[2], 45 + shimmer * 55);
          p.circle(star.x, star.y, coreSize);
        });
      };

      const drawNebulaOrbs = () => {
        nebulaOrbs.forEach((orb) => {
          for (let i = 4; i > 0; i -= 1) {
            const rr = (orb.r * i) / 4;
            p.noStroke();
            p.fill(orb.hue[0], orb.hue[1], orb.hue[2], orb.alpha * (i / 9));
            p.circle(orb.x, orb.y, rr);
          }

          if (!reduceMotion) {
            orb.x += orb.driftX;
            orb.y += orb.driftY;
            if (orb.x < -120) orb.x = p.width + 120;
            if (orb.x > p.width + 120) orb.x = -120;
            if (orb.y < -120) orb.y = p.height + 120;
            if (orb.y > p.height + 120) orb.y = -120;
          }
        });
      };

      p.setup = () => {
        p.pixelDensity(1);
        p.createCanvas(canvasWidth, canvasHeight).parent(elemRef.current);
        p.colorMode(p.RGB, 255, 255, 255, 100);
        reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
        buildScene();
        p.frameRate(30);
      };

      p.windowResized = () => {
        const newWidth = Math.max(320, elemRef.current?.clientWidth || canvasWidth);
        const newHeight = Math.max(280, elemRef.current?.clientHeight || canvasHeight);
        p.resizeCanvas(newWidth, newHeight);
        buildScene();
      };

      p.draw = () => {
        const t = p.millis();
        drawSkyGradient();
        glows.forEach(drawGlow);
        drawNebulaOrbs();
        drawConstellation(t);
        drawStars(t);
      };
    };

    const p5Instance = new p5(sketch, elemRef.current);

    return () => {
      p5Instance.remove();
    };
  }, [dimensions?.height, dimensions?.width]);

  return <div ref={elemRef} className="h-full w-full min-h-[360px]" />;
};

export default GridBackground;
