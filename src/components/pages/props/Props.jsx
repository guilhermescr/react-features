import BackToHomeButton from '../../BackToHomeButton';
import Header from '../../Header';
import Prop from './Prop';

export default function Props() {
  return (
    <div>
      <BackToHomeButton />

      <Header page="Props" />
      <h2>This is a h2 element without prop.</h2>

      <Prop num1={2} num2={5} element="" />
    </div>
  );
}
