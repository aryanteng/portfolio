import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import Link from "next/link";

function ProjectButton({ icon, url }) {
  return (
    <motion.button
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 360, 360, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{
        duration: 2,
      }}
      whileHover={{
        scale: 1.5,
        rotate: 0,
        borderRadius: "50%",
        transition: 0.1,
      }}
      whileTap={{ scale: 1, transition: 0 }}
      className={styles.button}
    >
      <Link href={url} passHref={true}>
        {icon}
      </Link>
    </motion.button>
  );
}

export default ProjectButton;
