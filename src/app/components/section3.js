import styles from "./section3.module.css";

export default function Section3() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.one}>
          <div className={styles.title}>빠르고 확실한 무료상담</div>
          <div className={styles.description}>
              무료이지만 빠르고 확실한<br />
              개인상담을 진행해 드립니다.
          </div>
        </div>
        <div className={styles.two}>
          <div className={styles.title}>기각 시 100% 환불</div>
          <div className={styles.description}>
            개인회생 기각 시 전액 환불해 드립니다. <br/>
            (의뢰인의 귀책 사유가 없는 경우)
          </div>
        </div>
        <div className={styles.three}>
          <div className={styles.title}>수임료 분납가능</div>
          <div className={styles.description}>
            힘든 의뢰인의 사정, 잘 알고있습니다. <br/>
            최대 5개월 분납 가능합니다.
          </div>
        </div>
        <div className={styles.four}>
          <div className={styles.title}>사무장 사무실 No</div>
          <div className={styles.description}>
            전문 변호사의 책임하에 <br/>
            안전하게 운영되고 있는 사무실입니다.
          </div>
        </div>
      </div>
    </>
  );
}
