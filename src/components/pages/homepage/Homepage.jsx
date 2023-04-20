import Header from '../../Header';
import Footer from '../../Footer';
import About from './About';
import Features from './Features';
import Feature from './Feature';
import Main from '../../Main';

export default function Homepage() {
  return (
    <div className="bg-gradient-to-r from-[#55B8FF] to-[#BD34FE]">
      <Header page="Homepage" />

      <Main>
        <About />

        <Features>
          <Feature routeTo="/jsx" routeTxt="JSX" />
          <Feature routeTo="/props" routeTxt="Props" />
          <Feature routeTo="/usestate" routeTxt="useState" />
          <Feature routeTo="/useref" routeTxt="useRef" />
        </Features>
      </Main>

      <Footer />
    </div>
  );
}
