import './App.css';
import Home from './components/layout/Home';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
		<Router>
			<Navbar />
			<Home />
		</Router>
    </div>
  );
}

export default App;
