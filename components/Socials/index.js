import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import ProjectButton from "./ProjectButton";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

function Socials() {
  const socials = [
    {
      icon: <GoogleIcon classNamw={styles.icon} />,
      url: "/",
    },
    {
      icon: <InstagramIcon className={styles.icon} />,
      url: "/",
    },
    {
      icon: <FacebookIcon className={styles.icon} />,
      url: "/",
    },
    {
      icon: <GitHubIcon className={styles.icon} />,
      url: "/",
    },
  ];
  return (
    <>
      <motion.h1
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.5, type: "spring" }}
      >
        Socials
      </motion.h1>
      <div className={styles.container}>
        {socials.map((item, i) => {
          return <ProjectButton key={i} icon={item.icon} url={item.url} />;
        })}
      </div>
    </>
  );
}

export default Socials;
