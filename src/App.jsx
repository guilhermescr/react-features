import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/homepage/Homepage';
import Jsx from './components/pages/jsx/Jsx';
import Props from './components/pages/props/Props';
import styles from './css/App.module.css';
import UseState from './components/pages/usestate/UseState';
import UseRef from './components/pages/useref/UseRef';
import UseContext from './components/pages/usecontext/UseContext';

export default function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/jsx" element={<Jsx />} />
          <Route path="/props" element={<Props />} />
          <Route path="/usestate" element={<UseState />} />
          <Route path="/useref" element={<UseRef />} />
          <Route path="usecontext" element={<UseContext />} />
        </Routes>
      </div>
    </Router>
  );
}
