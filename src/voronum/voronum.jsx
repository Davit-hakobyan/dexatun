import React, { useEffect, useState } from 'react'
import './voronum.css'

const Voronum = () => {
     const [value,setValue] = useState('')
     const [ardjunq,setArdjunq] = useState([])
     const baza = [
        {id:1,
          name:'аналгин',
        gin:2500,
        arka:'առկա է',
        },
          {id:2,
            name:'димидрол',
        gin:500,
        arka:'առկա է',
        },
          {id:3,
            name:'аспирин',
        gin:100,
        arka:'առկա է',
        },
          {id:4,
            name:'пенталгин',
        gin:3000,
        arka:'առկա չէ',
        },
        {id:5,
          name:'спирт 250мл',
        gin:600,
        arka:'առկա է',
        },
          {id:6,
            name:'вата',
        gin:200,
        arka:'առկա է',
        },
          {id:7,
            name:'спазмагон',
        gin:900,
        arka:'առկա է',
        },
          {id:8,
            name:'натри хлор',
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
        if(elem.name.includes(value.toLocaleLowerCase()))
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
       {ardjunq.length===0?(''):(
         <div className='jnjel_div'  onClick={()=>{setArdjunq([])}} >
         <svg  id='jnjel' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
          </svg>
      </div>
       )

       }
     
       {ardjunq.map((elem)=>(
          (
            <div className='voronman_ardjunq' key={elem.id} >
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