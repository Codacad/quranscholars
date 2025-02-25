import { useEffect, useRef } from "react";
import p5 from "p5";
const Canvas_1 = ({ dimensions }) => {
  const { width, height } = dimensions;
  const canvas_1Ref = useRef();
  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(width, height).parent(canvas_1Ref.current);
        p.background("rgba(0,0,0,.02)");
        p.noLoop();
      };
      p.draw = () => {
        for (let i = 0; i <= width; i += 50) {
          p.stroke("#eee");
          p.line(p.random(100), i + 50, width - p.random(100), i + 50);
        }

        for (let i = 0; i <= 100; i++) {
          p.fill(p.random(255), p.random(255), p.random(255), 20);
          p.noStroke();
          p.ellipse(
            p.random(width),
            p.random(height),
            p.random(200),
            p.random(200)
          );
        }
      };
    };
    const Canvas_1Instance = new p5(sketch, canvas_1Ref.current);

    return () => {
      Canvas_1Instance.remove();
    };
  }, [width, height]);

  return <div className="" ref={canvas_1Ref}></div>;
};

export default Canvas_1;
