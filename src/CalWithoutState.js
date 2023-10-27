import React from 'react'

export default function CalWithoutState() {

    const somme =()=>{
        let s=Number(document.getElementById('n1').value)+Number(document.getElementById('n2').value);

        document.getElementById('r').value=s
    }

  return (
    <div>
        <h1>CalWithoutState</h1>

        nombre 1: <input type="text" id='n1'/> &nbsp;&nbsp;

        nombre 2: <input type="text" id='n2'/> &nbsp;&nbsp;

        <input type="button" value='somme' onClick={somme}/>

        Resultat : <input type="text" id='r'/>
    </div>
  )
}
