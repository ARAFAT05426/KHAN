"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ReusableInputField = ({ name }) => {
  const [focused, setFocused] = useState(false);

  const variants = {
    initial: {
      boxShadow: "none",
      scaleY: 1,
      borderBottomColor: "#111827",
    },
    focused: {
      boxShadow: "3px 3px 1px rgba(20, 207, 147, 0.6)",
      scaleY: 1.07,
      borderBottomColor: "#111827",
    },
  };

  return (
    <div className="w-full flex justify-center my-6 z-10">
      <motion.div
        className="relative"
        initial="initial"
        animate={focused ? "focused" : "initial"}
        variants={variants}
        transition={{
          boxShadow: { duration: 0.5, ease: "easeInOut" },
          scale: { type: "spring", stiffness: 300, damping: 20 },
          borderBottomColor: { duration: 0.4, ease: "easeInOut" },
        }}
        style={{
          display: "inline-block",
          paddingBottom: "5px",
          borderBottomWidth: "2px",
          borderBottomStyle: "solid",
          borderRadius: "0.5px",
          borderBottomColor: "#14cf93",
        }}
      >
        <input
          id={name}
          name={name}
          placeholder={name?.toLowerCase()}
          className="px-5 py-3 outline-none focus-within:outline-none bg-transparent text-center"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
          }}
        />
      </motion.div>
    </div>
  );
};

export default ReusableInputField;
