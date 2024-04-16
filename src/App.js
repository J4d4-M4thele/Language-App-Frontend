import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Home from './Home';
import LanguageView from './components/language/LanguageView';
import NavBar from './components/common/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddLanguage from './components/language/AddLanguage';

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
        path='/view-languages'
        element={<LanguageView />}
        ></Route>
        <Route
        exact 
        path='/add-languages'
        element={<AddLanguage />}
        ></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
