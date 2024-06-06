import { useState, useEffect } from "react";
const Button = () => {
    const [theme, setTheme] = useState(() => {
        const initialTheme = localStorage.getItem("theme");
        return initialTheme ? initialTheme : "light";
      });
    useEffect(() => {
        document.body.className = theme === 'light' ? '' : 'dark-theme';
        localStorage.setItem("theme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    }
    return (
    <div className={`ctn ${theme}`}>
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme} className='active btn pr-4 pl-4 border-0'>Theme</button>
        </div>
    </div>
    )
}
export default Button;