import styles from './faq.module.scss';
import Section from '../section/Section';
import Question from './question/Question';

const Faq = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Section
          subsection={true}
          title='Frequently Asked Questions'
          text="Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
        />
      </div>
      <div className={styles.questions}>
        <Question 
          question='What is Bookmark?'
          answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ex mattis nunc accumsan tempus vitae sed eros. Nunc at bibendum felis, in commodo justo.    Maecenas lobortis leo neque, et sollicitudin risus maximus ac. Vestibulum volutpat massa at augue auctor.'
        />
        <Question 
          question='How can I request a new browser?'
          answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ex mattis nunc accumsan tempus vitae sed eros. Nunc at bibendum felis, in commodo justo.    Maecenas lobortis leo neque, et sollicitudin risus maximus ac. Vestibulum volutpat massa at augue auctor.'
        />
        <Question 
          question='Is there a mobile app?'
          answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ex mattis nunc accumsan tempus vitae sed eros. Nunc at bibendum felis, in commodo justo.    Maecenas lobortis leo neque, et sollicitudin risus maximus ac. Vestibulum volutpat massa at augue auctor.'
        />
        <Question 
          question='What about other Chromium browsers?'
          answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ex mattis nunc accumsan tempus vitae sed eros. Nunc at bibendum felis, in commodo justo.    Maecenas lobortis leo neque, et sollicitudin risus maximus ac. Vestibulum volutpat massa at augue auctor.'
        />
      </div>
      <div className={styles.button}>More Info</div>
    </div>
  )
}

export default Faq;