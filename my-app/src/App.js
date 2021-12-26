import './App.css';
import Navbar from './components/Navbar';
import React from 'react'; 
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <TextForm heading="Enter your text here :)"/>  
      </div>
    </>
  );
}

export default App;
