import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import ProjectButton from "./ProjectButton";
import styles from "./styles.module.css";

function Socials() {
  const socials = [
    {
      icon: <GoogleIcon classNamw={styles.icon} />,
      url: "mailto",
    },
    {
      icon: <InstagramIcon className={styles.icon} />,
      url: "mailto",
    },
    {
      icon: <FacebookIcon className={styles.icon} />,
      url: "mailto",
    },
    {
      icon: <GitHubIcon className={styles.icon} />,
      url: "mailto",
    },
  ];
  return (
    <>
      <h1>Socials</h1>
      <div className={styles.container}>
        {socials.map((item, i) => {
          return <ProjectButton key={i} icon={item.icon} url={item.url} />;
        })}
      </div>
    </>
  );
}

export default Socials;
