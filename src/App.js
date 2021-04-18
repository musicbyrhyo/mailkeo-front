import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' render={(props)=>(<Navbar />)} />
      </Router>
    </div>
  );
}

export default App;
