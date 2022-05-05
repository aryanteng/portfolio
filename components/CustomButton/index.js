import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

function CustomButton({ notifications, setNotifications }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, transition: 0.2 }}
      whileTap={{ scale: 0.9 }}
      animate={{ rotate: 360, type: "spring" }}
      className={styles.button}
      onClick={() => {
        setNotifications("Hey! Thanks for checking out my portfolio!");
      }}
    >
      <motion.h1
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
      >
        Click Me!
      </motion.h1>
    </motion.button>
  );
}

export default CustomButton;
