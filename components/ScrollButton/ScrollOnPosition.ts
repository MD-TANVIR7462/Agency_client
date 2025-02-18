"use client";
import { animateScroll } from "react-scroll";

const ScrollOnPosition = (position: number) => {
  const options = {
    duration: 200,
    smooth: true,
  };
  return animateScroll.scrollTo(position, options);
};

export default ScrollOnPosition;
