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
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (hover) {
      var cursor = document.getElementById("cursor");
      var cursor2 = document.getElementById("cursor2");
      document.body.addEventListener("mousemove", function (e) {
        (cursor.style.border = "2px solid #000 "),
          (cursor2.style.backgroundColor = "#000");
      });
    } else {
      var cursor = document.getElementById("cursor");
      var cursor2 = document.getElementById("cursor2");
      document.body.addEventListener("mousemove", function (e) {
        (cursor.style.border = "2px solid var(--theme)"),
          (cursor2.style.backgroundColor = "var(--theme)");
      });
    }
  }, [hover]);
  return (
    <div
      className={styles.container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div className={styles.info}>
        <Link href="/" passHref={true}>
          <motion.h1
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.5, type: "spring" }}
            style={{ cursor: "pointer" }}
          >
            PORTFOLIO
          </motion.h1>
        </Link>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5, type: "spring" }}
          className={styles.socialsBox}
        >
          <p className={styles.pConnect}>Connect with me!</p>
          <div className={styles.socials}>
            <Link href="/" passHref={true}>
              <GoogleIcon className={styles.icon} />
            </Link>
            <Link href="/" passHref={true} className={styles.icon}>
              <InstagramIcon className={styles.icon} />
            </Link>
            <Link href="/" passHref={true} className={styles.icon}>
              <FacebookIcon className={styles.icon} />
            </Link>
            <Link href="/" passHref={true} className={styles.icon}>
              <GitHubIcon className={styles.icon} />
            </Link>
          </div>
        </motion.div>
      </div>
      <motion.p
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
        className={styles.byLine}
      >
        Designed and Developed by Aryan Teng ©{year}
      </motion.p>
    </div>
  );
}

export default Footer;
