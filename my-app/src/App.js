import './App.css';
import Navbar from './components/Navbar';
import React from 'react'; 
import TextForm from './components/TextForm';
//require('./components/Regex'); // to try and learn RegExpression

function App() {
  return (
    <>
      <Navbar title='Textutils'/>
      <div className='container'>
        <TextForm heading="Enter your text here :)"/>  
      </div>
      
    </>
  );
}

export default App;
