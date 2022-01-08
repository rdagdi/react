import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react'; 
import TextForm from './components/TextForm';
import About from './components/About';
//require('./components/Regex'); // to try and learn RegExpression

function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode("light")
      document.body.style.backgroundColor = "white"
    }else{
        setMode("dark")
        document.body.style.backgroundColor = "#394a59"
    }
  }
  return (
    <>
      <Navbar title='Textutils' mode={mode} toggleMode={toggleMode} />
      <div className='container'>
        <TextForm heading="Enter your text here :)" mode="mode"/>  
      </div>
      <div className='container'>
        <About/> 
      </div>
      
    </>
  );
}

export default App;
