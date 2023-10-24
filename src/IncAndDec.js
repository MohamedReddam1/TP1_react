import React, { useState } from 'react'

export default function IncAndDec() {
    const [counter,setcounter]=useState(0);

    // declaration de methode incrementer

    const inc=()=>{
        let c = counter;
        c++;
        setcounter(c);
    }


    // declaration de methode decrementer


    const dec=()=>{
        let c= counter;
        c--;
        setcounter(c);
    }
  return (
    <div>
      <input type="button" value="-" onClick={dec}/>
      <p>la valeur est {counter}</p>
      <input type="button" value="+" onClick={inc}/>
    </div>
  )
}
