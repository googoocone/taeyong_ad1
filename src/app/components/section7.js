import styles from "./section7.module.css";
import priceImg from "../assets/img/price.png";

export default function Section7() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={styles.title}>합리적인 변호사 수임료</div>
          <div className={styles.description}>
            개인회생, 비싸야할 이유가 없습니다.
          </div>
        </div>
        <div>
          <img src={priceImg.src} className={styles.img}></img>
        </div>
      </div>
    </>
  );
}
