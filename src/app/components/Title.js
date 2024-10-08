import styles from './Title.module.css';

export default function Title() {
  return <>
    <div className={styles.title}>
      <div>개인회생 전문 <span className={styles.brownFont}>김태용변호사</span>와</div>
      <div><span className={styles.brownFont}>다시 시작</span>할 수 있습니다.</div>
    </div>
  </>
}