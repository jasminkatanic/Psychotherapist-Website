import './App.scss';
import Home from './Home';
import About from './About';
import Books from './Books';
import Guest from './Guest';
import Workshops from './Workshops';
import Contact from './Contact';
import NavBar from './NavBar';
import MobNav from './mobNav';
import MobNavBg from './NavBg';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar /> 
        <MobNavBg />          
        <MobNav />
          <div className="content" id="mainContent">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/ja">
                <About />
              </Route>
              <Route path="/knjige">
                <Books />
              </Route>
              <Route path="/gostovanja">
                <Guest />
              </Route>
              <Route path="/radionice">
                <Workshops />
              </Route>
              <Route path="/kontakt">
                <Contact />
              </Route>
            </Switch>
          </div>                      
      </div>
    </Router>
  );
}

export default App;
