import React, { useEffect } from "react";
import { useRef, useState } from "react";
import Canvas_1 from "../p5_sketches/test-code/Canvas_1";
const TestPage = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const elemRef = useRef();

  useEffect(() => {
    if (elemRef.current) {
      setWidth(elemRef.current.offsetWidth);
      setHeight(elemRef.current.offsetHeight);
    }
    const handleWindowResize = () => {
      if (elemRef.current) {
        setWidth(elemRef.current.offsetWidth);
        setHeight(elemRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className="test min-h-screen relative" ref={elemRef}>
        <Canvas_1 dimensions={{ width, height }} />
        <div className="absolute top-0 left-0">
          <div className="card p-8 max-w-[400px]">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                dolorum aut quasi. Distinctio nam ad molestiae excepturi minima
                dolorem laborum.
              </p>
              <button className="block p-2 bg-red-600 text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestPage;
