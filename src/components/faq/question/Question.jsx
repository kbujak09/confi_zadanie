import styles from './question.module.scss';
import { useState } from 'react';
import arrow from '../../../assets/icon-arrow.svg';

const Question = ({question, answer}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div  className={styles.container} >
      <div className={styles.questionContainer}
          onClick={isOpen === false ? () => setIsOpen(true) : () => setIsOpen(false)}>
        <div className={styles.question}>
          {question}
        </div>
        <img 
          className={`${styles.arrow} ${isOpen ? styles.flipped : null}`} 
          src={arrow} 
          alt="open/close question" />
      </div>
      {isOpen && <hr className={styles.hr}/>}
      <div className={`${styles.answer} ${!isOpen ? styles.hidden : styles.visible}`}>{answer}</div>
      <hr className={styles.hr}/>
    </div>
  )
}

export default Question;