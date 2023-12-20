import styles from './tabs.module.scss';
import { useState } from 'react';

const Tabs = ({isChosen, setIsChosen}) => {


  return (
    <>
      <div className={styles.tabs}>
        <hr className={styles.hr}/>
        <span onClick={() => setIsChosen('1')} className={`${styles.tab} ${isChosen === '1' ? styles.chosen : null}`}>Simple Bookmarking</span>
        <hr className={styles.hr}/>
        <span onClick={() => setIsChosen('2')} className={`${styles.tab} ${isChosen === '2' ? styles.chosen : null}`}>Speedy Searching</span>
        <hr className={styles.hr}/>
        <span onClick={() => setIsChosen('3')} className={`${styles.tab} ${isChosen === '3' ? styles.chosen : null}`}>Easy Sharing</span>
        <hr className={styles.hr}/>
      </div>
      <hr className={styles.singleHr}/>
    </>
  )
}

export default Tabs;