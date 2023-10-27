import React, { useState } from 'react'

export default function CalWithState() {

    // declaration des states

    const [n1,setN1]=useState(0);

    const [n2,setN2]=useState(0);

    const [n3,setN3]=useState(0);

    const modif1=(e)=>{
        setN1(e.target.value)

    }

    const modif2=(e)=>{
        setN2(e.target.value)

    }

    const modif3=(e)=>{
        setN3(e.target.value)

    }

    const somme=()=>{
        setN3(Number(n1)+Number(n2))
    }

  return (
    <div>
        <h1>CalWithState</h1>

        nombre 1: <input type="text" onChange={(e)=>modif1(e)}  value={n1}/> &nbsp;&nbsp;

        nombre 2: <input type="text" onChange={(e)=>modif2(e)} value={n2}/> &nbsp;&nbsp;

        <input type="button" value='somme' onClick={somme}/>

        Resultat : <input type="text" onChange={(e)=>modif3(e)} value={n3}/>
    </div>
  )
}
