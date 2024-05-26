import './App.css';
import Navbar from './components/layout/Navbar';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Search from './components/users/Search';
const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <div className='container'>
          <h1>Github Users Data</h1>
          <Switch>
            <Route exact path="/" component={Search} />
          </Switch>
        </div>
        <Search />
    </div>
  );
}

export default App;
