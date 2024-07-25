import { ReactLenis } from "lenis/react";

const SmoothScrolling = ({ children }) => {
  const lenisOptions = {
    lerp: 0.1,
    smoothTouch: false,
    smooth: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
