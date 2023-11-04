import React, { useState } from 'react'

export default function CompToogle() {

const[toogle,setToogle]=useState(true)

const change=()=>{
    setToogle(!toogle)
}

let content = toogle ? <h1>content true</h1> : <h1>content false</h1>
  return (
    <div>
        {content}
        <input type="button" onClick={change} value="change" />
    </div>
  )
}
