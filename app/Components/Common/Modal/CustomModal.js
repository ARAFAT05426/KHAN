"use client";
import React from "react";
import { motion } from "framer-motion";
import { RiCloseCircleLine } from "react-icons/ri";

const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={onClose}
        >
          <motion.div
            className="bg-card/75 rounded-lg p-3 tablet:p-5 laptop:p-8 w-1/2 mx-auto relative"
            initial={{ y: "-50%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-50%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal on content click
          >
            <button
              className="absolute top-2 right-2 text-primary"
              onClick={onClose}
            >
              <RiCloseCircleLine size={45} className="p-1" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default CustomModal;
