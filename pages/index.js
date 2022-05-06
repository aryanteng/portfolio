import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import Project from "../components/Project/Project";
import ModeButton from "../components/ModeButton/ModeButton";
import CustomButton from "../components/CustomButton";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Socials from "../components/Socials";

export default function Home() {
  const [notifications, setNotifications] = useState("");

  return (
    <>
      <Header />
      <div className={styles.container}>
        <CustomButton
          notifications={notifications}
          setNotifications={setNotifications}
        />
        <Socials />
      </div>
      <AnimatePresence initial={false}>
        {notifications?.length > 1 && (
          <motion.div
            className={styles.notifList}
            positionTransition
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                alt="Creator"
                src="https://i.ibb.co/myvq6GR/aryan.jpg"
                sx={{
                  width: "40px",
                  height: "40px",
                  marginRight: "0.5rem",
                  marginTop: "-0.5rem",
                }}
                className={styles.display}
              />
              <p>{notifications}</p>
            </div>
            <CloseIcon
              className={styles.closeIcon}
              onClick={() => setNotifications("")}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
}
