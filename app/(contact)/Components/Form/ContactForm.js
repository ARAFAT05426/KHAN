"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Button1 from "@/app/Components/Common/Buttons/Button1";
import ContactInp from "./ContactInp";
import emailjs from "@emailjs/browser";
import CustomModal from "@/app/Components/Common/Modal/CustomModal";

const ContactForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const field = e.target;
    const name = field.name.value;
    const subject = field.subject.value;
    const email = field.email.value;
    const message = field.message.value;

    const templatemMessage = {
      to_name: "Khan",
      name: name,
      subject: subject,
      email: email,
      message: message,
    };

    try {
      await emailjs.send(
        "service_rrfzsui",
        "template_pbulehr",
        templatemMessage,
        "UCud5jrTTUMHzvDI3"
      );
      e.target.reset();
      setErrorMessage("");
      setModalContent("Your message has been sent successfully!");
      setModalOpen(true);
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("Failed to send email. Please try again later.");
    }
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="z-10 flex-1 p-3">
      <motion.form
        className="grid grid-cols-2 gap-5"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
        onSubmit={sendEmail}
      >
        <motion.div variants={itemVariants}>
          <ContactInp title={"Name"} name={"name"} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ContactInp title={"Subject"} name={"subject"} />
        </motion.div>
        <motion.div variants={itemVariants} className="col-span-2">
          <ContactInp title={"Email"} name={"email"} />
        </motion.div>
        <motion.div variants={itemVariants} className="col-span-2">
          <h1 className="text-primary/75">Message</h1>
          <textarea
            className="bg-transparent border-b border-b-card outline-none w-full focus-within:border-b-primary"
            rows={5}
            name="message"
          />
        </motion.div>
        {errorMessage && (
          <div className="text-red-600 mt-2 text-center text-xs col-span-2">
            {errorMessage}
          </div>
        )}
        <motion.div variants={itemVariants} className="col-span-2">
          <Button1
            title={"Send Message"}
            subtitle={"Let`s Go!"}
            type="submit"
          />
        </motion.div>
      </motion.form>
      <CustomModal isOpen={isModalOpen} onClose={closeModal}>
        <div className="text-center p-5">
          <h2 className="text-xl font-bold text-primary mb-3">Success!</h2>
          <p className="text-gray-300">{modalContent}</p>
        </div>
      </CustomModal>
    </div>
  );
};

export default ContactForm;
