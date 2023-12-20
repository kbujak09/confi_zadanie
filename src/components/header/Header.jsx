import styles from './header.module.scss';
import logo from '../../assets/logo-bookmark.svg';
import hamburger from '../../assets/icon-hamburger.svg';

const Header = ({openMenu}) => {

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <img className={styles.hamburger} onClick={() => {openMenu(true); document.body.style.overflow = 'hidden'}} src={hamburger} alt="menu" />
      <ul className={styles.list}>
        <li className={styles.listItem}>FEATURES</li>
        <li className={styles.listItem}>PRICING</li>
        <li className={styles.listItem}>CONTACT</li>
        <li className={`${styles.listItem} ${styles.login}`}>LOGIN</li>
      </ul>
    </header>
  )
}

export default Header;