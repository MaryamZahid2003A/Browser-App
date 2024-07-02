import React from 'react';
import NavBar from './NavBar.js';
import './App.css';
import logo from './logo.svg';
import Components from './Components.js';
function Main() {
  return (
    <>

    <div className='bg-slate-800 h-screen p-4'>
    <NavBar />
    <div className='flex'>
            <img src={logo} className="App-logo" alt="logo" />
            <div>
            <p className='text-white text-5xl pl-10 sm:pl-4 md:text-4xl lg:text-5xl'>React <span className='text-cyan-400'>JS</span></p>
            </div>
    </div>  
      <p className='text-white text-center  text-lg pt-5 sm:text-2xl  lg:text-4xl mt-10'>Become a <span className='text-cyan-400'>React Dev</span></p>
      <p className='text-white text-center text- pt-5 sm:text-xl lg:text-3xl'>Find the React job that fits your skill set</p>
        <div className="react">
            <Components/>
        </div>
    </div>
     </>
  );
}

export default Main;