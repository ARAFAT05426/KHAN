"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const textVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Typewritter = ({ texts, loop = true }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBeforeDelete = 2000;

    if (deleting) {
      if (displayedText.length > 0) {
        const deleteInterval = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(deleteInterval);
      } else {
        setDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        if (!loop && currentTextIndex === texts.length - 1) {
          return;
        }
      }
    } else {
      if (displayedText.length < texts[currentTextIndex].length) {
        const typingInterval = setTimeout(() => {
          setDisplayedText(
            (prev) => prev + texts[currentTextIndex][displayedText.length]
          );
        }, typingSpeed);
        return () => clearTimeout(typingInterval);
      } else {
        const pauseTimeout = setTimeout(
          () => setDeleting(true),
          pauseBeforeDelete
        );
        return () => clearTimeout(pauseTimeout);
      }
    }
  }, [displayedText, deleting, currentTextIndex, texts, loop]);

  useEffect(() => {
    if (
      !deleting &&
      displayedText === "" &&
      currentTextIndex === texts.length
    ) {
      setCurrentTextIndex(0);
    }
  }, [displayedText, deleting, currentTextIndex, texts.length]);

  return (
    <div className="flex items-center text-[#12B76A] text-3xl md:text-5xl lg:text-6xl font-mono flex-wrap box-border">
      <div className=" whitespace-pre-wrap mr-auto items-start">
        <motion.span
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={textVariants}
          className="text-3xl tablet:text-4xl laptop:text-5xl desktop:text-6xl text-center laptop:text-start font-bold"
        >
          <span className="text-white">a</span> {displayedText}
        </motion.span>
        <span className="inline-block w-1 tablet:w-[5px] h-8 tablet:h-10 laptop:h-14 desktop:h-16 bg-[#12B76A] animate-blink rounded-[1.5px] ml-1 -mb-2 tablet:-mb-3" />
      </div>
    </div>
  );
};

export default Typewritter;
