"use client"
import { motion } from 'framer-motion';
import Button1 from '@/app/Components/Common/Buttons/Button1';
import ContactInp from './ContactInp';
import CustomDropdown from '@/app/Components/Common/Input/CustomDropdown';

const ContactForm = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

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
      >
        <motion.div variants={itemVariants}>
          <ContactInp title={'First Name'} name={'firstname'} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ContactInp title={'Last Name'} name={'lastname'} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ContactInp title={'Email'} name={'email'} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <CustomDropdown
            title={'Subject'}
            name={'subject'}
            options={['front', 'back']}
          />
        </motion.div>
        <motion.div variants={itemVariants} className="col-span-2">
          <h1>Message</h1>
          <textarea className="bg-transparent border-b border-b-card outline-none w-full focus-within:border-b-primary" rows={6.6}></textarea>
        </motion.div>
        <motion.div variants={itemVariants} className="col-span-2">
          <Button1 title={'Send Message'} subtitle={'Let`s Work Together!'} />
        </motion.div>
      </motion.form>
    </div>
  );
};

export default ContactForm;
