import Header from '../../Header';
import styles from './Jsx.module.css';
import beagle from '../../../img/homepage/beagle-dog.png';
import BackToHomeButton from '../../BackToHomeButton';

export default function Jsx() {
  return (
    <>
      <BackToHomeButton />

      <Header classObj={styles.header} page="JSX" />
      <h2 className={styles.heading}>This is an h2.</h2>
      <button
        className={styles.button}
        onClick={() => alert('You got an alert :)')}
      >
        Click here to get an alert()
      </button>

      <img className={styles.beagle} src={beagle} />
    </>
  );
}
