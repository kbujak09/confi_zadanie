import styles from './about.module.scss';
import GraphicOne from '../graphic/GraphicOne';
import Section from '../section/Section';
import GetOn from './getOn/GetOn';

const About = () => {
  return (
    <main className={styles.container}>
        <div className={styles.graphic}>
          <GraphicOne />
        </div>
        <div className={styles.flexbox}>
          <div className={styles.section}>
              <Section 
                subsection={false}
                title={'A Simple Bookmark Manager'}
                text={'A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.'}
                />
            </div>
          <div className={styles.geton}>
            <GetOn />
          </div>
        </div>
    </main>
  )
}

export default About;