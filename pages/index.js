import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import Project from "../components/Project/Project";
import ModeButton from "../components/ModeButton/ModeButton";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>i will be a god developer</div>
      <Footer />
    </>
  );
}
