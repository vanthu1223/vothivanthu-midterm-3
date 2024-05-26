import './App.css';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Navbar from './components/layout/Navbar';
import User from './components/users/Users';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Search from './components/users/Search';
const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <div className='container'>
          <h1>Github Users Data</h1>
          <Switch>
            <Router exact path="/" component={Search} />
            <Router exact path="/about" component={About} />
            <Route exact path="/user/:id" component={User} />
            <Router path="/*" component={NotFound}></Router>
          </Switch>
        </div>
        <Search />
    </div>
  );
}

export default App;
