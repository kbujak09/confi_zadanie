import styles from './getOn.module.scss';

const Geton = () => {
  return (
    <div className={styles.geton}>
      <div className={`${styles.button} ${styles.chrome}`}>Get it on Chrome</div>
      <div className={`${styles.button} ${styles.firefox}`}>Get it on Firefox</div> 
    </div>
  )
};

export default Geton;