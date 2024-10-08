import styles from './section2.module.css';
import section2Img from '../assets/img/section2.svg'

export default function Section2() {
  return <>
  
    <div className={styles.container}>
      <img src={section2Img.src} className={styles.img}></img>
    </div>
  </>
}