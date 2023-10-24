import React, { useState } from 'react'

export default function Cal1() {
    const [res,setres]=useState('');
    const [val,setval]=useState('');

    const GetVal=()=>{
        let v = val
    }
  return (
    <div>
        <div>
            <input type="text" disabled/>
            <div>
                <div>
                    <input type="button" value="7" />
                    <input type="button" value="8" />
                    <input type="button" value="9" />
                    <input type="button" value="+" />
                </div>
                <div>
                    <input type="button" value="4" />
                    <input type="button" value="5" />
                    <input type="button" value="6" />
                    <input type="button" value="-" />
                </div>
                <div>
                    <input type="button" value="3" />
                    <input type="button" value="4" />
                    <input type="button" value="5" />
                    <input type="button" value="x" />
                </div>
                <div>
                    <input type="button" value="0" />
                    <input type="button" value="1" />
                    <input type="button" value="2" />
                    <input type="button" value="/" />
                </div>
                <div><input type="button" value="=" /></div>
            </div>
        </div>
    </div>
  )
}
