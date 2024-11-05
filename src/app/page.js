import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import Title from "./components/Title";
import Youtube from "./components/Youtube";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Section6 from "./components/section6";
import Section0 from "./components/section0";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <div className={styles.homeContainer}>
        <Title></Title>
        <Youtube></Youtube>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
        <Section5></Section5>
        <Section6></Section6>
        <Section0></Section0>
        <Footer></Footer>
      </div>
    </>
  );
}
