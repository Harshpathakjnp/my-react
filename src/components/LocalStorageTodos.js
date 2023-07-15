import React, { useState } from 'react'
let datas = null;

function LocalStorageTodos() {
    const [inp, setInp] = useState('');
    const [lists,setLists] = useState([]);

    const clickChangeHandler = ()=>{
        let newarr = lists;
        newarr.push(inp)
        setLists(newarr);
        localStorage.setItem('Lists',lists);
        datas = localStorage.getItem('Lists');
        setInp('');
    }
    const print = () => {
        datas = localStorage.getItem('Lists');
    }

    
    return (
        <div>
            <h1>!!!!  Todos App using Local Storage !!!!</h1>
            <input type="text" onChange={(e) => { setInp(e.target.value) }}  value={inp}/>
            <button onClick={()=>{clickChangeHandler()}}>(+)</button>
            <p>{datas}</p>
            
            
        </div>
    )
}

export default LocalStorageTodos;
