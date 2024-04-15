import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Home from './Home';
import LanguageView from './components/language/LanguageView';

function App() {
  return (
    <div className="App">
     <h2>Welcome to the front-end</h2>
     <Home />
     <LanguageView />
    </div>
  );
}

export default App;
