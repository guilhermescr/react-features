import { useState } from 'react';
import Header from '../../Header';
import styles from './State.module.css';
import BackToHomeButton from '../../BackToHomeButton';

export default function State() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <BackToHomeButton />

      <Header page="State" />
      <h2>Counter with Integer Numbers</h2>
      <section className={styles.counterButtons}>
        <div>
          <label>Decrease</label>
          <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>

        <div>
          <h3>{counter}</h3>
        </div>

        <div>
          <label>Increase</label>
          <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>

        <div className={styles.otherFeatures}>
          <button onClick={() => setCounter(Math.round(Math.random() * 100))}>
            Get a Random Number
          </button>

          <button onClick={() => setCounter(0)}>Reset</button>
        </div>
      </section>
    </>
  );
}
