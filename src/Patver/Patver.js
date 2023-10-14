let arr = [
  {name:'analgin',
gin:2500,
arka:'arka e',
},
  {name:'dimidrol',
gin:500,
arka:'arka cee',
},
  {name:'aspirin',
gin:100,
arka:'arka e',
},
  {name:'pentalgin',
gin:3000,
arka:'arka che',
}
]
const ardjunq = []
function f(string){
  arr.map((elem)=>{
    if(elem.name.includes(string)){
      ardjunq.push(elem)
    }
  })
  return ardjunq


}