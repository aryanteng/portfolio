import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import Avatar from "@mui/material/Avatar";
import styles from "./styles.module.css";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const items = [
  // {
  //   name: "Display",
  //   url: "https://i.ibb.co/myvq6GR/aryan.jpg",
  // },
  {
    name: "About",
    url: "/",
  },

  {
    name: "Skills",
    url: "/",
  },
  {
    name: "Projects",
    url: "/",
  },
  {
    name: "Contact",
    url: "/",
  },
];

export const Navigation = (open) => (
  <motion.div variants={variants} className={styles.ul}>
    {items.map((item, i) => {
      return <MenuItem item={item.name} url={item.url} key={i} />;
    })}
  </motion.div>
);
