import { Routes, Route } from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import Auth from './components/Auth/Auth'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRoutes from './components/AllRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
