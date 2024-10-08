import styles from './section6.module.css';
import section6Img from '../assets/img/section6.svg'

export default function Section6() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.title}>법무법인 에이파트 수원</div>
          <div className={styles.description}>경기 수원시 영통구 광교중앙로248번길 7-2 씨동 3층 317, 318호</div>
        </div>
        <div className={styles.bottom}>
          <img src={section6Img.src} className={styles.img}></img>
        </div>
      </div>
    </>
  );
}
