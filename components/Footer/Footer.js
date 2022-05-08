import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Link href="/" passHref={true}>
          <motion.h1
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            style={{ cursor: "pointer" }}
          >
            Portfolio
            <span style={{ color: "var(--theme)", fontSize: "2.5rem" }}>.</span>
          </motion.h1>
        </Link>
        <motion.h1
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5, type: "spring" }}
        >
          Aryan
          <span style={{ color: "var(--theme)" }}> Teng</span>
        </motion.h1>
      </div>
      <motion.p
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        className={styles.byLine}
      >
        Designed and Developed by Aryan Teng ©{year}
      </motion.p>
    </div>
  );
}

export default Footer;
