import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, Button } from 'react-bootstrap';
import { BrowserRouter , Switch ,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/home">
        
      </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
