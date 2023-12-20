import styles from './browser.module.scss';
import hr from '../../../assets/bg-dots.svg';

const Browser = ({logo, name, description}) => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt={name} />
      <div className={styles.name}>Add to {name}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.hr}>
        <img src={hr} alt="hr" />
      </div>
      <div className={styles.button}>Add & Install Extension</div>
    </div>
  )
}

export default Browser;