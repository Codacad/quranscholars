import { useEffect, useRef } from "react";
import p5 from "p5";
const GridBackground = ({ dimensions }) => {
  const elemRef = useRef();
  const { width, height } = dimensions;
  console.log(width, height);
  useEffect(() => {
    const grid = (p) => {
      p.setup = () => {
        p.pixelDensity(1);
        p.createCanvas(width, height).parent(elemRef.current);
        p.background("rgba(0,0,0,0)");
        p.noLoop();
      };
      p.draw = () => {
        let x = 0;
        let y = 0;
        for (let i = 0; i <= 6; i++) {
          p.stroke("#eee");
          p.line(0, y, p.random(p.width), y);
          y += 50;
        }
        for (let i = 0; i <= 20; i++) {
          p.stroke("#eee");
          p.line(x, 0, x, p.height);
          x += 50;
        }

        // rect
        for (let i = 0; i <= 15; i++) {
          p.noStroke();
          p.fill("#fecaca");
          p.rect(p.random(width), p.random(height), 100, 100);
        }
      };
    };

    const p5Instance = new p5(grid, elemRef.current);

    return () => {
      p5Instance.remove();
    };
  }, [height, width]);

  return <div ref={elemRef}></div>;
};

export default GridBackground;
