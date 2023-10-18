import  { useEffect, useState } from 'react'
import './Dexerriinfo.css'

const Dexeriinfo = (props) => {
    const info = props.info
    
    
    const [zambjux,setZambjux] = useState(info)
    
    
    function gnum(){
      
        let k = 0
        for(let m of zambjux ){
         k+=m.gin
        }
        return k
       }
       function jnjelZ(e){
        let k = e.target.value
        console.log(k)
         let s = info.filter(e=>e.id!=k)
     
         setZambjux(s)
    
      }
     
     useEffect(()=>{
        setZambjux(info)
    },[info,zambjux])
    
    
  return (
    <div className='dexeriinfo'>
         <div className='zambjuxmej_div' >
                {zambjux.map((elem)=>(
                  <div className='voronman_ardjunq' key={elem.id}  Mkey={elem.id}   >
                  <div>
                    <b>{elem.name}</b><br />
                    <span>արժեքը-<b style={{color:"red"}} >{elem.gin}</b> դրամ</span>
                    <br />
                  </div>
                  <button value={elem.id} onClick={jnjelZ} >x</button>
                  </div>
                ))}
                <b>արժեքը -{gnum()} </b>
            </div>
            <Dexeriinfo  info ={zambjux} />
            
    </div>
  )
}

export default Dexeriinfo