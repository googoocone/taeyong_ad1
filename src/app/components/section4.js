import styles from "./section4.module.css";

export default function Section4() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
        
        </div>
        <div className={styles.questionContainer}>
          <div className={styles.question}>
            Q. 주식, 코인, 도박도 개인회생 되나요?
          </div>
          <div className={styles.answer}>
            A. 네 주식이나 코인, 도박같은 사행성 채무도
            <br />
            개인회생이 가능합니다.
          </div>
        </div>
        <div className={styles.questionContainer}>
          <div className={styles.question}>
            Q. 수원이 아닌데 김태용변호사님께 <br/>
            회생을 맡길 수 있나요?
          </div>
          <div className={styles.answer}>
            A. 네 가능합니다. 저희는 전국의 사건을 맡아서 <br/>
            진행하고있습니다.
          </div>
        </div>
        <div className={styles.questionContainer}>
          <div className={styles.question}>
            Q. 방문해서 변호사님과 상담하고 싶은데 <br/>가능한가요?
          </div>
          <div className={styles.answer}>
            A. 네 가능합니다. 오시기 전, 미리 전화로 예약을 하시면 변호사님과 
            상담가능합니다.
          </div>
        </div>
        <div className={styles.questionContainer}>
          <div className={styles.question}>
            Q. 상담 비용이 얼마인가요?
          </div>
          <div className={styles.answer}>
            A. 저희 회생메이트는 상담비용은 무료로 받지 않습니다. 그렇기 때문에 꼭
            저희와도 상담을 한번 해보신다면 분명 도움이 될 것입니다.
          </div>
        </div>
        <div className={styles.questionContainer}>
          <div className={styles.question}>
            Q. 개인회생 가족이 모르게 가능할까요?
          </div>
          <div className={styles.answer}>
            A. 전문가와 사전에 필요한 서류들을 모두 준비해서 진행한다면,
            가족 모르게 진행할 수도 있습니다.
          </div>
        </div>
        <div className={styles.questionContainer}>
          <div className={styles.question}></div>
          <div className={styles.answer}></div>
        </div>
      </div>
    </>
  );
}
