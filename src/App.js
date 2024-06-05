import './App.css';
import Home from './components/layout/Home';
import Navbar from './components/layout/Navbar';
import { useState,useEffect } from "react"; 
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  const [theme, setTheme] = useState(() => {
		const initialTheme = localStorage.getItem("theme");
		return initialTheme ? initialTheme : "light";
	});
  function getThemeFromLocalStorage() {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setTheme(savedTheme);
		}
	}

	function toggleTheme() {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === "light" ? "dark" : "light";
			localStorage.setItem("theme", newTheme);
			return newTheme;
		});
	}

	useEffect(() => {
		getThemeFromLocalStorage();
	}, [theme]);
  return (
      <div className={`ctn ${theme}`} style={{ backgroundColor: theme === 'light' ? '#333333' : '', color: theme === 'light' ? '#ffffff' : '' }}>
        <div className={`app ${theme}`}>
        <div className="App">
          <Router>
            <Navbar />
            <Home />
            <button onClick={toggleTheme} className='active btn pr-4 pl-4 border-0'>Theme</button>
          </Router>
        </div>
        </div>
      </div>
  );
}

export default App;
