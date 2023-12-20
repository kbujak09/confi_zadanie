import styles from './graphic.module.scss';
import image from '../../assets/illustration-hero.svg';

const GraphicOne = () => {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.imageOne} src={image} alt="about" />
        <div className={styles.shapeOne}></div>
      </div>
    </>
  )
}

export default GraphicOne;