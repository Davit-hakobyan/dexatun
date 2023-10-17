import React from 'react'
import logo from '../img/logo.png'
import './Heder.css'
import { Router, Route, Routes } from 'react-router';


const Heder = () => {
    
  return (
    
    <div>
        <div className='heder'  >
            <div className='heder_logo' >
                <img className='logo' src={logo} alt="" />
                <div className='logoi_mej' >
                    <b  hamar className='dexatun' >ԴԵՂԱՏՈԻՆ</b><br />
                    <b className='' >+374(99)10-31-30</b>
                    
                </div>
            </div>
          
           
            
        </div>
        
    </div>
  )
}

export default Heder