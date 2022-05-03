import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.css";

function Project() {
  const items = [
    {
      id: "1",
      title: "HELLO",
      subtitle: "helllllooooooo",
    },
    {
      id: "2",
      title: "HELLO",
      subtitle: "helllllooooooo",
    },
    {
      id: "3",
      title: "HELLO",
      subtitle: "helllllooooooo",
    },
    {
      id: "4",
      title: "HELLO",
      subtitle: "helllllooooooo",
    },
  ];
  const [selectedId, setSelectedId] = useState(null);
  console.log(selectedId);
  return (
    <div className={styles.container}>
      {items.map((item, i) => (
        <motion.div
          layoutId={item.id}
          key={i}
          onClick={() => setSelectedId(item.id)}
          className={styles.card}
        >
          <motion.h2>{item.title}</motion.h2>
          <motion.h5>{item.subtitle}</motion.h5>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h2>{items[selectedId]?.title}</motion.h2>
            <motion.h5>{items[selectedId]?.subtitle}</motion.h5>
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Project;
