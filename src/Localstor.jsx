import React, { useState } from 'react'

const Localstor = () => {
    if(localStorage.getItem('ids')==null){
        localStorage.setItem('ids',JSON.stringify([]))
        
    }
    const [elments,setElments] = useState(JSON.parse(localStorage.getItem('ids')))
    const [baza,setBaza]= useState([
        {id:1,
         titel:'hom 1'
        },
        { id:2,
          titel:'hom 2'
        },
        {id:3,
            titel:'hom 3'
           }
           ,
           {id:4,
            titel:'hom 4'
           }

    ])
    function f(e){
        const ids = JSON.parse(localStorage.getItem('ids'))
        if(ids.includes(e)){
            const k = elments.filter((elem=>elem!=e))
        
            localStorage.setItem('ids',JSON.stringify(k))
            setElments(k)
          
           
        }else{
        localStorage.setItem('ids',JSON.stringify([...ids,e]))
        setElments([...elments,e])
        }

    
    }
   
    console.log(elments)
  
  return (
    
    <div>
        {baza.map(el=>{
            if(elments.includes(el.id)){
                return(
                    <div  key={el.id} >
                        <h3>{el.titel}</h3>
                        <button  onClick={()=>f(el.id)} >avelacnel</button>
                    </div>
                )
            }
        })

        }
        <hr />
        {
            baza.map(elem=>{
                return(
                    <div  key={elem.id} >
                        <h3>{elem.titel}</h3>
                        <button  onClick={()=>f(elem.id)}   style={elments.includes(elem.id)?{backgroundColor:'red'}:{backgroundColor:'green'}} >avelacnel</button>
                    </div>
                )
            }

                
            )
        }

    </div>
  )
}

export default Localstor