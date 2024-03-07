import React, { useEffect, useState }  from 'react';
import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom'
import Particles, {initParticlesEngine} from '@tsparticles/react';
import { loadFull } from 'tsparticles';

import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
// import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
// import Contact from './containers/contact';
import Navbar from './components/navBar';
import particles from './utils.js/particles';

function App() {

  const location = useLocation();
  console.log(location)

  const [init, setInit] = useState(false)

  useEffect(()=> {
    initParticlesEngine(async(main) => {
      await loadFull(main)
    }).then(()=> {
      setInit(true)
    })
  },[])

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
          {/* <Route path='/skills' element={<Skills />}/> */}
          <Route path='/portfolio' element={<Portfolio />}/>
          {/* <Route path='/contact' element={<Contact />}/> */}
        </Routes>
        </div>
   </div>
   
  )
}

export default App
