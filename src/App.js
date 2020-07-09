import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import FrontPage from './components/FrontPage/FrontPage'

function App() {
  return (
    <>
      <Navbar style={{backgroundColor: "black", color: "white"}}/>

      <FrontPage style={{backgroundColor: "white", color: "black"}}/>

    </>
  );
}

export default App;
