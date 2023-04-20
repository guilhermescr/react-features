import Header from '../../Header';
import beagle from '../../../img/homepage/beagle-dog.png';
import BackToHomeButton from '../../BackToHomeButton';
import Main from '../../Main';
import Footer from '../../Footer';

export default function Jsx() {
  return (
    <div className="bg-green-900">
      <Header page="JSX" />

      <Main customCSS="flex flex-col items-center justify-center">
        <h2 className="text-2xl pt-4 text-white">This is an h2.</h2>
        <button
          className="bg-lime-600 rounded-md p-2 px-4 mt-2 text-white hover:bg-lime-500 active:bg-red-600"
          onClick={() => alert('Roof Roof! :)')}
        >
          Click here to get an alert()
        </button>

        <img className="w-52" src={beagle} />

        <BackToHomeButton />
      </Main>

      <Footer />
    </div>
  );
}
