import { Link } from 'react-router-dom';
import styles from './BackToHomeButton.module.css';

export default function BackToHomeButton() {
  return (
    <Link to="/">
      <button className={styles.backToHomeButton}>Go Home &#x1F3E0;</button>
    </Link>
  );
}
