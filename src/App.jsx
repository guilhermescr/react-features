import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/homepage/Homepage';
import Jsx from './components/pages/jsx/Jsx';
import Props from './components/pages/props/Props';
import styles from './css/App.module.css';
import State from './components/pages/state/State';

export default function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/jsx" element={<Jsx />} />
          <Route path="/props" element={<Props />} />
          <Route path="/state" element={<State />} />
        </Routes>
      </div>
    </Router>
  );
}
