import styles from './footer.module.scss';
import LogoWhite from './logoWhite/LogoWhite';
import fbicon from '../../assets/icon-facebook.svg';
import twticon from '../../assets/icon-twitter.svg';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <LogoWhite />
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>FEATURES</li>
        <li className={styles.listItem}>PRICING</li>
        <li className={styles.listItem}>CONTACT</li>
      </ul>
      <div className={styles.icons}>
        <img src={fbicon} alt="facebook icon" />
        <img src={twticon} alt="twitter icon" />
      </div>
    </footer>
  )
}

export default Footer;