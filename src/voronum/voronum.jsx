import React, { useState } from 'react'
import './voronum.css'

const Voronum = () => {
     const [value,setValue] = useState('')
     const [ardjunq,setArdjunq] = useState([])
     const baza = [
        {name:'analgin',
        gin:2500,
        arka:'առկա չէ',
        },
          {name:'dimidrol',
        gin:500,
        arka:'առկա է',
        },
          {name:'aspirin',
        gin:100,
        arka:'առկա է',
        },
          {name:'pentalgin',
        gin:3000,
        arka:'առկա չէ',
        }
     ]
     function f(){
      if(value==='' || value===[]){
       return alert('խնդրում ենք մուտքագրել դեղի անվանումը')
      }
      let pat =[]
      setArdjunq([])
      baza.map((elem)=>{
        if(elem.name.includes(value))
        pat.push(elem)
      })
      if(pat.length===0){
        alert('ցավոք մեր դեղատանը նմանատիպ դեղորայք կամ ապրանք չի վաճառվում')
      }
      setArdjunq(pat)
      setValue('')
    }
    
     
  return (
    <div>
        <div className='voronum' >
            <div>
                <i className='teg_i' >Որոնումը իրականացնել ռուսերեն</i>
            </div>
            <br />
            <div className='voronman_div' >
                <input type="text"  value={value} onChange={(event)=>setValue(event.target.value)} className='voronman_input'  onKeyDown={(event)=>{
                 if(event.keyCode===13){
                     return f()}}}     />
                <div className='search' onClick={f} >
                   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                </div>
            </div>
            
        </div>
       <div  className='voronman_ej' >
       {ardjunq.map((elem)=>(
          (
            <div className='voronman_ardjunq' >
              <b>{elem.name}</b><br />
              <span>արժեքը-<b style={{color:"red"}} >{elem.gin}</b> դրամ</span>
              <span> այս պահին <b>{elem.arka}</b> </span>
              <br />
              


            </div>
          )
        ))
        }
       </div>
        
      
        
    </div>
  )
}

export default Voronum