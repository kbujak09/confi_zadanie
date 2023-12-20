import styles from './features.module.scss';
import Tabs from './tabs/Tabs';
import GraphicTwo from '../graphic/GraphicTwo';
import Section from '../section/Section';
import { useState } from 'react';

const Features = () => {

  const [isChosen, setIsChosen] = useState('1');

  const selectedTab = () => {
    if (isChosen === '1') {
      return (
        <Section 
            subsection={true}
            title={'Bookmark in one click'}
            text={'Organize your bookmarks however you like. Our simple drag-and-drop-interface give you complete control over how you manage your favourite sites.'}
        />
      )
    }
    else if (isChosen === '2') {
      return (
        <Section 
            subsection={true}
            title={'Intelligent search'}
            text={'Our powerful search feature will help you find saved sites in not time at all. No need to trawl trough all of your bookmarks.'}
        />
      )
    }
    else if (isChosen === '3') {
      return (
        <Section 
            subsection={true}
            title={'Share your bookmarks'}
            text={'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'}
        />
      )
    }
    return (
      <Section 
          subsection={true}
          title={'Bookmark in one click'}
          text={'Organize your bookmarks however you like. Our simple drag-and-drop-interface give you complete control over how you manage your favourite sites.'}
      />
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.sectionOne}>
        <Section 
          subsection={true}
          title={'Features'}
          text={'Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.'}
          />
      </div>
      <div className={styles.tabs}>
        <Tabs isChosen={isChosen} setIsChosen={setIsChosen}/>
      </div>
      <div className={styles.graphicAndInfo}>
        <div className={styles.graphic}>
          <GraphicTwo chosen={isChosen}/>
        </div>
        <div className={styles.sectionTwo}>
          {selectedTab()}
          <div className={styles.more}>More Info</div>
        </div>
      </div>
    </div>
  )
}

export default Features;