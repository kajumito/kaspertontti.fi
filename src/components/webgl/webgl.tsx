import { useEffect, useRef } from "react";
import View from "./view";

function WebGL() {
  const webglView = useRef<View | null>(null); // Use null assertion operator
  const threeRoot = useRef<HTMLDivElement>(null); // Use null assertion operator
  let raf: number | null = null;

  const handleAnimate = () => {
    webglView.current?.update(); // Use optional chaining
    webglView.current?.draw(); // Use optional chaining
    raf = requestAnimationFrame(handleAnimate);
  };

  const resize = () => {
    webglView.current?.resize(
      threeRoot.current?.offsetWidth ?? 0,
      threeRoot.current?.offsetHeight ?? 0
    );
  };

  const resizeListenerContext = () => {
    resize();
  };

  useEffect(() => {
    const initWebGLView = () => {
      webglView.current = new View();
      threeRoot.current?.appendChild(webglView.current.renderer.domElement); // Use optional chaining
    };

    const addListeners = () => {
      window.addEventListener("resize", resizeListenerContext);
    };

    const removeListeners = () => {
      window.removeEventListener("resize", resizeListenerContext);
    };

    initWebGLView();
    addListeners();
    handleAnimate();
    resize();

    return () => {
      removeListeners();
      if (raf !== null) {
        cancelAnimationFrame(raf);
      }
    };
  }, []);

  return <div className="absolute h-full w-full" ref={threeRoot} />;
}

export default WebGL;
