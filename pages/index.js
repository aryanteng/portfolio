import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import Project from "../components/Project/Project";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>{/* <Project /> */}</div>
      <Footer />
    </>
  );
}
