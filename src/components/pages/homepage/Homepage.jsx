import Header from '../../Header';
import Footer from './Footer';
import About from './About';
import Features from './Features';
import Feature from './Feature';

export default function Homepage() {
  return (
    <div>
      <Header page="Homepage" />

      <main>
        <About />

        <Features>
          <Feature routeTo="/jsx" routeTxt="JSX" />
          <Feature routeTo="/props" routeTxt="Props" />
          <Feature routeTo="/state" routeTxt="State" />
        </Features>
      </main>

      <Footer />
    </div>
  );
}
