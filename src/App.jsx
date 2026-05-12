import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import Heros from './Heros.jsx';
import Batman from './Batman.jsx';
import Spiderman from './Spiderman.jsx';
import Superman from './Superman.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <h1>Page Content</h1>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'hurray' : 'inactive')}>
              Heros
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/spiderman"
              className={({ isActive }) => (isActive ? 'hurray' : 'inactive')}
            >
              Spiderman
            </NavLink>
          </li>
          <li>
            <NavLink to="/batman" className={({ isActive }) => (isActive ? 'hurray' : 'inactive')}>
              Batman
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/superman"
              className={({ isActive }) => (isActive ? 'hurray' : 'inactive')}
            >
              Superman
            </NavLink>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Heros />} />
          <Route path="/batman" element={<Batman />} />
          <Route path="/spiderman" element={<Spiderman />} />
          <Route path="/superman" element={<Superman />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
