import './App.css';
import Navbar from './components/layout/Navbar';
import { useEffect, useState } from 'react';
import axios from "axios"
import Users from './components/users/Users';
import Search from './components/users/Search';
const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <div className='container'>
          <h1>Github Users Data</h1>
        </div>
        <Search />
    </div>
  );
}

export default App;
