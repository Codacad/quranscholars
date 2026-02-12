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
      let shapes = [];
      p.setup = () => {
        p.pixelDensity(1);
        p.createCanvas(canvasWidth, canvasHeight).parent(elemRef.current);
        p.colorMode(p.HSL, 360, 100, 100, 1);
        // Use Unicode escapes so names render correctly regardless of file encoding
        const names = [
          "\u0627\u0644\u0644\u0647", // Allah
          "\u0645\u062d\u0645\u062f \uFDFD", // Muhammad
          "\u0627\u0644\u0631\u062d\u0645\u0646", // Ar-Rahman
          "\u0627\u0644\u0631\u062d\u064a\u0645", // Ar-Rahim
          "\u0627\u0644\u0633\u0644\u0627\u0645", // As-Salam
          "\u0627\u0644\u0643\u0631\u064a\u0645", // Al-Karim
        ];
        shapes = Array.from({ length: 12 }, (_, idx) => ({
          x: p.random(p.width),
          y: p.random(p.height),
          radius: p.random(70, 140),
          hue: p.random([10, 24, 320, 180]),
          spin: p.random(-0.003, 0.003),
          sides: p.random([5, 6, 8]),
          pulse: p.random(0.002, 0.004),
          phase: p.random(1000),
          text: names[idx % names.length],
          textSize: p.random(24, 38),
          textHue: p.random([12, 24, 330, 180]),
          textRotation: p.random(-0.2, 0.2),
        }));
        p.frameRate(30);
        p.background(0, 0, 100, 0);
      };

      p.draw = () => {
        // Slightly stronger clear to avoid ghosting of moving glyphs
        p.background(0, 0, 100, 0.12);

        // soft grid
        p.stroke(210, 20, 92, 0.4);
        p.strokeWeight(1);
        const spacing = 46;
        for (let x = spacing / 2; x < p.width; x += spacing) {
          p.line(x, 0, x, p.height);
        }
        for (let y = spacing / 2; y < p.height; y += spacing) {
          p.line(0, y, p.width, y);
        }

        // geometric blooms with embedded names
        shapes.forEach((shape, i) => {
          const t = p.millis() * shape.pulse + shape.phase;
          const r = shape.radius * (1 + 0.06 * Math.sin(t));
          const angleStep = p.TWO_PI / shape.sides;
          p.push();
          p.translate(shape.x, shape.y);
          p.rotate(p.frameCount * shape.spin + i * 0.1);
          p.noFill();
          p.stroke(shape.hue, 70, 48, 0.22);
          p.strokeWeight(1.5);
          p.beginShape();
          for (let a = 0; a < p.TWO_PI + 0.01; a += angleStep) {
            const wobble = 6 * Math.sin(t + a * 2);
            const x = Math.cos(a) * (r + wobble);
            const y = Math.sin(a) * (r + wobble);
            p.vertex(x, y);
          }
          p.endShape(p.CLOSE);

          // embed name inside shape
          p.push();
          const wobbleX = Math.sin(p.frameCount * 0.003 + i) * 2;
          const wobbleY = Math.cos(p.frameCount * 0.0035 + i) * 1.5;
          p.translate(wobbleX, wobbleY);
          p.rotate(shape.textRotation + Math.sin(t) * 0.02);
          p.textAlign(p.CENTER, p.CENTER);
          p.textSize(shape.textSize);
          p.fill(shape.textHue, 65, 32, 0.28);
          p.noStroke();
          p.text(shape.text, 0, 0);
          p.pop();

          p.pop();
        });

        // floating sparkles
        p.noStroke();
        for (let i = 0; i < 18; i++) {
          const t = p.frameCount * 0.015 + i;
          const x =
            (p.width / 2 + Math.cos(t + i) * (canvasWidth / 2.5)) % p.width;
          const y =
            (p.height / 2 + Math.sin(t * 1.3 + i) * (canvasHeight / 2.8)) %
            p.height;
          p.fill(170, 40, 72, 0.45);
          p.circle(
            (x + p.width) % p.width,
            (y + p.height) % p.height,
            3 + (i % 3),
          );
        }
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
