import React  from 'react';
import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom'
import Particles from '@tsparticles/react';


import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Portfolio from './containers/portfolio';
import Navbar from './components/navBar';
import particles from './utils.js/particles';

function App() {

  const location = useLocation();
  console.log(location)



  const renderParticleJSInHomePage = location.pathname === "/";

  return (
      <div className='App'>

        {/*particles js */}

        {
          renderParticleJSInHomePage && 
          <Particles id='particles' options={particles}/>
        }


        {/*navbar */}
        <Navbar />

        {/* main page content */}
        <div className='App__main-page-content'>
        <Routes>
          <Route index path='/' element={ <Home /> } />
          <Route path='/about' element={<About />}/>
          <Route path='/resume' element={<Resume />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
        </Routes>
        </div>
   </div>
   
  )
}

export default App
