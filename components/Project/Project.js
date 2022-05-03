import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.css";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

function Project() {
  const items = [
    {
      id: "1",
      title: "HELLO",
      subtitle: "helllllooooooo",
    },
    {
      id: "2",
      title: "HELLO",
      subtitle: "helllllooooooo",
    },
    {
      id: "3",
      title: "HELLO",
      subtitle: "helllllooooooo",
    },
    {
      id: "4",
      title: "HELLO",
      subtitle: "helllllooooooo",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <motion.div layoutId={1} onClick={() => setOpen(!open)}>
        <Image
          src="/weekend.png"
          width="350"
          height="350"
          alt="website image"
        ></Image>
        <motion.h2>WhatsApp Clone</motion.h2>
        <motion.h5>working clone of whatsapp</motion.h5>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div layoutId={open}>
            <motion.h2>WhatsApp Clone</motion.h2>
            <motion.h5>working clone of whatsapp</motion.h5>
            <motion.button
              className={styles.button}
              onClick={() => setOpen(!open)}
            >
              <CloseIcon />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Project;
