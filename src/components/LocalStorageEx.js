import React, { useState } from 'react'

function LocalStorageEx() {
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const Handle = () => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Password', pwd);
    };
    const Remove = () => {
        localStorage.removeItem('Name');
        localStorage.removeItem('Password');
    };
    return (
        <div>
            <h1>Name of the user : </h1>
            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
            <h1>Enter Password : </h1>
            <input type="text" value={pwd} onChange={(e) => { setPwd(e.target.value) }} />
            <div><button onClick={() => { Handle() }}>Save</button></div>

            <div>
                Name: <p>{localStorage.getItem('Name')}</p>
            </div>
            <div>
                Password: <p>{localStorage.getItem('Password')}</p>
            </div>
            <div>
                <button onClick={Remove}>Remove</button>
            </div>
        </div>
    )
}


export default LocalStorageEx;
