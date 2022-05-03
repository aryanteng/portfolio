import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { Drawer } from "./Drawer";
import Head from "next/head";
import { motion } from "framer-motion";
import ModeButton from "../ModeButton/ModeButton";
export default function Header() {
  const [activeTheme, setActiveTheme] = useState("");
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  // Run whenever theme change is toggled
  useEffect(() => {
    if (activeTheme) {
      document.body.dataset.theme = activeTheme;
      window.localStorage.setItem("theme", activeTheme);
    }
  }, [activeTheme]);

  return (
    <>
      <div className={styles.navbar}>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />

          <title>Portfolio</title>
          <link
            rel="icon"
            type="image/x-icon"
            href="https://i.ibb.co/myvq6GR/aryan.jpg"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content="Portfolio" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <link rel="canonical" href="link" />
          <meta
            name="keywords"
            content="Portfolio, Aryan Teng, Web Development, App Development, Next, React, Javascript, HTML, CSS, UI, UX, Figma, Design"
          />
          <meta name="author" content="Portfolio" />

          <meta
            name="twitter:card"
            content="https://i.ibb.co/myvq6GR/aryan.jpg"
          />
          <meta name="twitter:site" content="link" />
          <meta name="twitter:title" content="Portfolio" />
          <meta name="twitter:description" content="Portfolio" />
          <meta
            name="twitter:image:src"
            content="https://i.ibb.co/myvq6GR/aryan.jpg"
          />
          <meta name="twitter:image:alt" content="Aryan Teng" />

          <meta property="og:url" content="link" />
          <meta property="og:type" content="Aryan Teng" />
          <meta property="og:title" content="Portfolio" />
          <meta
            property="og:image"
            content="https://i.ibb.co/myvq6GR/aryan.jpg"
          />
          <meta property="og:description" content="Portfolio of Aryan Teng" />
          <meta property="og:site_name" content="Portfolio" />

          <meta itemProp="name" content="Aryan Teng" />
          <meta itemProp="description" content="Portfolio" />
          <meta itemProp="image" content="https://i.ibb.co/myvq6GR/aryan.jpg" />
          <meta
            httpEquiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          ></meta>
        </Head>
        <Link href="/" passHref={true}>
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            style={{ cursor: "pointer" }}
            className={styles.Heading}
          >
            Portfolio
            <span style={{ color: "var(--theme)", fontSize: "2.5srem" }}>
              .
            </span>
          </motion.h1>
        </Link>

        <div className={styles.links}>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className={styles.modeButton}
            onClick={() => setActiveTheme(inactiveTheme)}
          >
            <ModeButton />
          </motion.div>
          <Link href="/" passHref={true}>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
              className={styles.link}
            >
              About
            </motion.p>
          </Link>
          <Link href="/" passHref={true}>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
              className={styles.link}
            >
              Skills
            </motion.p>
          </Link>
          <Link href="/" passHref={true}>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              className={styles.link}
            >
              Projects
            </motion.p>
          </Link>

          <Link href="/" passHref={true}>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5, type: "spring" }}
              className={styles.link}
            >
              Contact
            </motion.p>
          </Link>
        </div>
        <Drawer />
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5, type: "spring" }}
          className={styles.mobileModeButton}
          onClick={() => setActiveTheme(inactiveTheme)}
        >
          <ModeButton />
        </motion.div>
      </div>
    </>
  );
}
