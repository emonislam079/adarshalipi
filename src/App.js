import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Switch ,Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Service from './component/Service/Service';
import About from './component/About/About';
import Teachers from './component/Teachers/Teachers';
import Footer from './component/Footer/Footer';
import NotFound from './component/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/service">
        <Service></Service>
      </Route>
      <Route path="/teachers">
        <Teachers></Teachers>
      </Route>
            <Route path="*">
        <NotFound></NotFound> 
      </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
