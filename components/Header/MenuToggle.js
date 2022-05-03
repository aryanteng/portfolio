import React, { useState } from "react";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

function MenuToggle({ toggle }) {
  return (
    <button className={"motionButton"} onClick={toggle}>
      {/* {open ? (
        <MenuIcon sx={{ color: "var(--white)", fontSize: "2rem" }} />
      ) : (
        <CloseIcon sx={{ color: "var(--white)", fontSize: "2rem" }} />
      )} */}
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          stroke="var(--black)"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          stroke="var(--black)"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          stroke="var(--black)"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}

export default MenuToggle;
