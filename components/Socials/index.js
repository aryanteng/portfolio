import React from "react";
import { useMotionValue, Reorder, motion } from "framer-motion";
import { useState } from "react";
import styles from "./styles.module.css";
import { useRaisedShadow } from "./use-raised-shadow";
import { useDragControls } from "framer-motion";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const socials = [
  {
    name: "Gmail",
    url: "mailto:aryan20499@iiitd.ac.in",
    icon: <GoogleIcon className={styles.icon} />,
  },
  {
    name: "Instagram",
    url: "Google",
    icon: <InstagramIcon className={styles.icon} />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/aryan.teng.1",
    icon: <FacebookIcon className={styles.icon} />,
  },
  {
    name: "GitHub",
    url: "https://github.com/aryanteng",
    icon: <GitHubIcon className={styles.icon} />,
  },
];

function Socials() {
  const [items, setItems] = useState(socials);
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();
  return (
    <div className={styles.container}>
      <h1 style={{ color: "var(--theme)" }}>Socials</h1>
      {/* <p style={{ color: "var(--theme)", margin: 0 }}>personal link tree ;)</p> */}
      <Reorder.Group
        as="div"
        axis="y"
        onReorder={setItems}
        values={items}
        className={styles.wrapper}
      >
        {items.map((item, i) => (
          <Reorder.Item
            as="div"
            key={i}
            value={item}
            style={{ boxShadow, y }}
            dragListener={false}
            dragControls={dragControls}
            onHover={{ scale: 1.5 }}
            className={styles.social}
            s
          >
            {item.icon}
            <p>{item.name}</p>
            <div onPointerDown={(e) => dragControls.start(e)}>
              <DragIndicatorIcon
                style={{ cursor: "grab", color: "var(--black)" }}
              />
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}

export default Socials;
