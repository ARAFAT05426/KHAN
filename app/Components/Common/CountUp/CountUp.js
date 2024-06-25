"use client";
import { useEffect } from "react";
import { useMotionValue, useTransform, motion, animate } from "framer-motion";
const CountUp = ({ end, className, style }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    animate(count, end, {
      duration: 2,
      ease: "easeInOut",
    });
  }, [count, end]);

  return <motion.div className={className} style={style}>{rounded}</motion.div>;
};

export default CountUp;
