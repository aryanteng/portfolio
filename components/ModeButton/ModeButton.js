import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

function ModeButton() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className={styles.switch} data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className={styles.handle} layout transition={spring} />
    </div>
  );
}

export default ModeButton;
