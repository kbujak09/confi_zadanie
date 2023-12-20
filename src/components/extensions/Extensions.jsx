import styles from './extensions.module.scss';
import Section from '../section/Section';
import Browser from './browser/Browser';
import chrome from '../../assets/logo-chrome.svg'
import opera from '../../assets/logo-opera.svg'
import firefox from '../../assets/logo-firefox.svg'

const Extensions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Section 
          subsection={true}
          title='Download the extension'
          text="We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize."
        />
      </div>
      <div className={styles.browsers}>
        <Browser 
          logo={chrome}
          name={'Chrome'}
          description={'Minimum version 62'}
        />
        <Browser 
          logo={firefox}
          name={'Firefox'}
          description={'Minimum version 55'}
        />
        <Browser 
          logo={opera}
          name={'Opera'}
          description={'Minimum version 46'}
        />
      </div>
    </div>
  )
}

export default Extensions;