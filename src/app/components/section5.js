import styles from "./section5.module.css";

export default function Section5() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.title}>자격/경력</div>
          <div className={styles.description}>- 형사전문변호사</div>
          <div className={styles.description}>- 개인회생전문변호사</div>
          <div className={styles.description}>- 공인중개사</div>
          <div className={styles.description}>- 육군군사법원 군판사</div>
          <div className={styles.description}>- 육군 군검사, 징계간사 및 징계위원</div>
          <div className={styles.description}>- 국가배상심의회 간사</div>
          <div className={styles.description}>- 육군참모총장 표창</div>
        </div>
        <div className={styles.sizedBox}></div>
        <div className={styles.bottom}>
          <div className={styles.title}>학력/활동</div>
          <div className={styles.description}>- 서울고등학교 졸업</div>
          <div className={styles.description}>- 고려대학교 법학과 졸업</div>
          <div className={styles.description}>- 부산대학교 법학전문대학원</div>
          <div className={styles.description}>- 성균관대학교 경영전문대학원 최고경영자과정</div>
          <div className={styles.description}>- (주)덕대건설 법률고문</div>
          <div className={styles.description}>- (주)하이우드 법률고문</div>
          <div className={styles.description}>- (주)티에이치인베스트먼트 기업 법률고문</div>
          <div className={styles.description}>- 대법원 국선변호인</div>
          <div className={styles.description}>- 서울동부, 남부, 북부지방법원 국선변호인</div>
        </div>
      </div>
    </>
  );
}
