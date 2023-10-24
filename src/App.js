
import './App.css';
import Heder from './Heder/Heder';
import '../src/Patver/Patver'
import Voronum from './voronum/voronum';
import Footer from './footer/Footer';
import Contact from './contactner/Contact';
import Info from './informacia/Info';
import { useState } from 'react';
import Localstor from './Localstor';


function App() {
  
  return (
    <div className="App">
      <Heder/>
      <Info/>
      <Voronum   />
      <Contact/>
      <Footer/>
      <Localstor/>
    </div>
    
    
  );
}

export default App;
