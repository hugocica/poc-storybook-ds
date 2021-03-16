import React, { useLayoutEffect, useState } from "react";

import * as s from "./styles";
import { IRippleProps } from "./types";

const Ripple = ({ duration = 850 }: IRippleProps) => {
  const [rippleArray, setRippleArray] = useState([]);

  const cleanUpFunction = () => {
    setRippleArray([]);
  };

  useLayoutEffect(() => {
    let bounce = null;
    if (rippleArray.length > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleArray.length, duration, cleanUpFunction]);

  const addRipple = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <s.RippleContainer duration={duration} onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={"span" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </s.RippleContainer>
  );
};

export default Ripple;
