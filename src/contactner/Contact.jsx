import React from 'react'
import './Contact.css'
import { FaViber } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";


const Contact = () => {
  return (
    <div>
        <div className='contact' >  
            <div className='contact_1'>
              <span>Մեր հասցեն -<b> Աշոցք 1-ին փողոց 5-րդ վարչական շենք</b></span><br />
              <br />
              <hr />
              <br />
              <span>Դեղատան հեռախոսահամար<b>+374 (93) 27-51-57</b></span><br />
              <br />
              <hr />
              <br />
              <span>Պատվերների և գների ճշգրտման համար խնդրում եմ զանգահարել կամ գրել</span>
              <br />
              <br />
              <div>
              <BsFillTelephoneFill className='icons_phon' /> <b>+374 (93) 27-51-57</b>
              </div>
              <br />
              <div>
              <FaViber  className='icons_viber' /> <b>+374 (93) 27-51-57</b>
              </div>
              <br />
              <div>
                  <BsWhatsapp  className='icons_what' /> <b>+374 (93) 27-51-57</b>
              </div>
              <br />
              

            </div>
            <div className='contact_2' >

            </div>
        </div>
    </div>
  )
}

export default Contact