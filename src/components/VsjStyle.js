import React, { useState } from 'react';
const VsjStyle = () => {
    const [textcolor, setColor] = useState('red');

    const colorChangeHandler = (event) => {

        setColor(event.target.value);

    }


    return <div>
        <h2 style={{ backgroundColor: textcolor }}>Dynamic Style</h2>
        VsjStyle<input type="text" onChange={colorChangeHandler} />
    </div>
}
export default VsjStyle;