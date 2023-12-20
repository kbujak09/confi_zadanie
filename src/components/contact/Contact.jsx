import styles from './contact.module.scss';
import { useState, useEffect, useRef } from 'react';
import errorIcon from '../../assets/icon-error.svg';

const numeral = require('numeral');

const Contact = () => {

  const [count, setCount] = useState(35000)

  const [inputValue, setInputValue] = useState('');

  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const [error, setError] = useState("");

  const ref = useRef(null);

  const checkEmail = (e) => {
    e.preventDefault();
    if (inputValue.match(regex) || inputValue === '') {
      return setError('');
    }
    setError("Whoops, make sure it's an email");
  }

  useEffect(() => {
    ref.current = setInterval(() => {
      setCount((prev) => prev - 35);
    }, 20);

    return () => {
      clearInterval(ref.current);
    };
  }, []);

  useEffect(() => {
    if (count === 0) {
      clearInterval(ref.current);
    }
  }, [count])

  return (
    <div className={styles.container}>
      <div className={styles.subTitle}>{numeral(count).format('0,0')}{count !== 0 ? '+' : null} ALREADY JOINED</div>
      <div className={styles.title}>Stay up-to-date with what we're doing</div>
      <form className={styles.form} onSubmit={(e) => checkEmail(e)}>
        <div className={styles.inputOuterContainer}>
          <div className={styles.inputContainer}>
            <input onChange={(e) => setInputValue(e.target.value)}
                  className={`${styles.input} ${error ? styles.inputErrorStyle : null}`} 
                  placeholder='Enter your email address' type="text" />
          {error && 
            <div className={styles.inputError}>
              <img src={errorIcon} alt="" />
            </div>}
        </div>
        {error && <div className={styles.error}>{error}</div>}
        </div>
        <button className={styles.button}>Contact Us</button>
      </form>
    </div>
  )
}

export default Contact;