import styles from './graphic.module.scss';
import image1 from '../../assets/illustration-features-tab-1.svg';
import image2 from '../../assets/illustration-features-tab-2.svg';
import image3 from '../../assets/illustration-features-tab-3.svg';

const GraphicOne = ({chosen}) => {

  const setImage = () => {
    if (chosen === '1') {
      return image1;
    }
    else if (chosen === '2') {
      return image2;
    }
    else {
      return image3;
    }
  }

  return (
    <>
      <div className={styles.container}>
        <img className={styles.imageTwo} src={setImage()} alt="features" />
      </div>
      <div className={styles.shapeTwo}></div>
    </>
  )
}

export default GraphicOne;