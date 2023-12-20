import styles from './section.module.scss';

const Section = ({subsection, title, text}) => {
  if (subsection) {
    return (
      <div className={styles.container}>
        <div className={styles.subTitle}>{title}</div>
        <div className={styles.text}>{text}</div>
    </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
  </div>
  )
}

export default Section;