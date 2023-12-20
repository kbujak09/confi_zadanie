import styles from './menu.module.scss';
import LogoFullWhite from './logoFullWhite/LogoFullWhite';
import fbicon from '../../assets/icon-facebook.svg';
import twticon from '../../assets/icon-twitter.svg';
import close from '../../assets/icon-close.svg'

const Menu = ({closeMenu}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <LogoFullWhite />
        <img src={close} alt="close" onClick={() => {closeMenu(false); document.body.style.overflow = 'scroll'}} />
      </div>
      <ul className={styles.list}>
        <hr className={styles.hr}/>
        <li className={styles.item}>FEATURES</li>
        <hr className={styles.hr}/>
        <li className={styles.item}>PRICING</li>
        <hr className={styles.hr}/>
        <li className={styles.item}>CONTACT</li>
        <hr className={styles.hr}/>
      </ul>
      <div className={styles.login}>LOGIN</div>
      <div className={styles.icons}>
        <img src={fbicon} alt="facebook icon" />
        <img src={twticon} alt="twitter icon" />
      </div>
    </div>
  )
}

export default Menu;