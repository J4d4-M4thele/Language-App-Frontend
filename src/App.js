import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Home from './Home';
import LanguageView from './components/language/LanguageView';
import NavBar from './components/common/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
     <NavBar />
      <Routes>
        <Route
        exact 
        path='/'
        element={<Home />}
        ></Route>
        <Route
        exact 
        path='/view-students'
        element={<LanguageView />}
        ></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
