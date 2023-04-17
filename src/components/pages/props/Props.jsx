import BackToHomeButton from '../../BackToHomeButton';
import Header from '../../Header';
import Main from '../../Main';
import Prop from './Prop';

export default function Props() {
  return (
    <div className="bg-slate-900">
      <Header page="Props" />

      <Main>
        <h2 className="text-2xl text-center text-white py-2">
          This is a h2 element without prop.
        </h2>

        <Prop num1={2} num2={5} element="" />

        <BackToHomeButton />
      </Main>
    </div>
  );
}
