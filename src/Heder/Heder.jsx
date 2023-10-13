import React from 'react'
import logo from '../img/logo.png'
import './Heder.css'

const Heder = () => {
  return (
    <div>
        <div className='heder'  >
            <div className='heder_logo' >
                <img className='logo' src={logo} alt="" />
                <div>
                    <b   className='dexatun' >ԴԵՂԱՏՈԻՆ</b>
                </div>
            </div>
            <div  className='heder_menu' >
                <b>Կոնտակտային տվյալներ</b>
                <b>Պատվիրել</b>
                <b>Մեր մասին</b>
                <b>Գործնկերներ</b>
                

            </div>
        </div>
    </div>
  )
}

export default Heder