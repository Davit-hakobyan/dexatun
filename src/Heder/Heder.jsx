import React from 'react'
import logo from '../img/logo.png'
import './Heder.css'



const Heder = () => {
    
  return (
    
    <div>
        <div className='heder'  >
            <div className='heder_logo' >
                <img className='logo' src={logo} alt="" />
                <div className='logoi_mej' >
                    <b  hamar className='dexatun' >ԴԵՂԱՏՈԻՆ</b><br />
                    <b className='' >(094)-12-34-56</b>
                    
                </div>
            </div>
            <div  className='heder_menu' >
                <b>Կոնտակտային տվյալներ</b>
                <b>Պատվիրել</b>
                <b>Գործնըկերներ</b>
                

            </div>
           
            
        </div>
        
    </div>
  )
}

export default Heder