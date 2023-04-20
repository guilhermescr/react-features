import { useEffect, useState } from 'react';
import Header from '../../Header';
import BackToHomeButton from '../../BackToHomeButton';
import Main from '../../Main';
import CounterButton from './CounterButton';
import Footer from '../../Footer';
import CounterContainer from './CounterContainer';
import { bg_image } from './StateBackgroundImage.module.css';

export default function State() {
  const [counter, setCounter] = useState(0);
  const [counterColor, setCounterColor] = useState('text-black');
  const [isOneHundred, setIsOneHundred] = useState(false);
  const root = document.querySelector(':root');

  useEffect(() => {
    if (counter !== 100 && counter !== -100) {
      setBackgroundImage('');
      setIsOneHundred(false);
    }

    if (counter < 0) {
      setCounterColor('text-red-500');
    } else if (!counter) {
      // !counter = 0;
      setCounterColor('text-black');
    } else {
      // counter > 0
      setCounterColor('text-green-600');
    }
  }, [counter]);

  function setBackgroundImage(url) {
    if (url) {
      root.style.setProperty('--image-url', `url("${url}")`);
    } else {
      root.removeAttribute('style');
    }
  }

  async function getGifFromGiphyAPI() {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${
        import.meta.env.VITE_GIPHY_API
      }&limit=1`
    );
    const responseData = await response.json();
    const imageURL = responseData.data.images.downsized.url;

    setBackgroundImage(imageURL);
    setIsOneHundred(true);
  }

  function getRandomNumber() {
    let randomNumberLimit = Math.round(Math.random() * 1) === 1 ? 100 : -100;
    let randomNumber = Math.round(Math.random() * randomNumberLimit);

    // e.g.: counter is 20, randomNumber is 20, this while will draw another number.
    while (randomNumber === counter) {
      randomNumber = Math.round(Math.random() * randomNumberLimit);
    }

    if (randomNumber === 100 || randomNumber === -100) {
      getGifFromGiphyAPI();
    }

    setCounter(randomNumber);
  }

  return (
    <div
      className={`bg-[#FFBF17] ${bg_image} bg-no-repeat bg-center bg-fixed bg-cover flex flex-col justify-between`}
    >
      <Header page="State" />

      <Main customCSS="flex flex-col gap-4 items-center justify-center">
        <h2 className="bg-white p-2 px-4 text-center text-2xl font-bold">
          Counter with Integer Numbers
        </h2>

        {isOneHundred && (
          <h3 className="bg-green-600 border border-black font-bold p-2 px-4 text-xl text-center text-white">
            Congrats! You reached the 100 counter! This means you got a GIF!
          </h3>
        )}

        <section className="flex flex-col gap-8 items-center justify-center">
          <div className="counter__main-functions flex items-center">
            <CounterContainer classStyles="flex flex-col items-center justify-center">
              <label
                className="bg-white cursor-pointer select-none p-2 px-4 hover:bg-gray-100 active:bg-gray-300"
                htmlFor="decreaseCounter"
              >
                Decrease
              </label>

              <CounterButton
                onclick={() => {
                  if (counter - 1 >= -100) {
                    setCounter(counter - 1);
                  }
                }}
                htmlfor="decreaseCounter"
              >
                -
              </CounterButton>
            </CounterContainer>

            <p
              className={`bg-white rounded-xl font-bold self-end py-3 px-4 text-center ${counterColor} w-full sm:w-20`}
            >
              {counter}
            </p>

            <CounterContainer classStyles="flex flex-col items-center">
              <label
                className="bg-white cursor-pointer select-none p-2 px-4 hover:bg-gray-100 active:bg-gray-300"
                htmlFor="increaseCounter"
              >
                Increase
              </label>

              <CounterButton
                onclick={() => {
                  if (counter + 1 <= 100) {
                    setCounter(counter + 1);
                  }
                }}
                htmlfor="increaseCounter"
              >
                +
              </CounterButton>
            </CounterContainer>
          </div>

          <div className="counter__other-functions"></div>
        </section>

        <section className="flex flex-wrap gap-4 items-center justify-center max-w-md">
          <div className="flex flex-col gap-4 items-center justify-center sm:flex-row sm:gap-0">
            <CounterButton onclick={getRandomNumber}>
              Get a Random Number
            </CounterButton>

            <CounterButton onclick={() => setCounter(0)}>Reset</CounterButton>
          </div>
        </section>

        <BackToHomeButton />
      </Main>

      <Footer />
    </div>
  );
}
