import { useState } from 'react';
import Header from '../../Header';
import BackToHomeButton from '../../BackToHomeButton';
import Main from '../../Main';
import CounterButton from './CounterButton';

export default function State() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="bg-[#FFBF17] flex flex-col justify-between">
      <Header page="State" />

      <Main customCSS="flex flex-col items-center justify-center">
        <h2 className="text-center text-2xl font-bold mb-6">
          Counter with Integer Numbers
        </h2>

        <section className="flex flex-wrap gap-4 items-center justify-center max-w-md">
          <div>
            <label htmlFor="decreaseCounter">Decrease</label>
            <CounterButton
              onclick={() => setCounter(counter - 1)}
              htmlfor="decreaseCounter"
            >
              -
            </CounterButton>
          </div>

          <div className="text-center w-full sm:w-20">
            <h3>{counter}</h3>
          </div>

          <div>
            <label htmlFor="increaseCounter">Increase</label>
            <CounterButton
              onclick={() => setCounter(counter + 1)}
              htmlfor="increaseCounter"
            >
              +
            </CounterButton>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center sm:flex-row sm:gap-0">
            <CounterButton
              onclick={() => setCounter(Math.round(Math.random() * 100))}
            >
              Get a Random Number
            </CounterButton>

            <CounterButton onclick={() => setCounter(0)}>Reset</CounterButton>
          </div>
        </section>

        <BackToHomeButton />
      </Main>

      <footer></footer>
    </div>
  );
}
