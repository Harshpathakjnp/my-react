import React, { useState } from "react";
const SimpleIntrest = () => {
    const [sidata, setIntrest] = useState({ p: 0, r: 0, t: 0 });
    const [si, setSi] = useState(0);

    const p = (event) => {
        const tt = event.target.value;
        setIntrest({ ...sidata, p: Number(event.target.value) });
        setSi((tt * sidata.r * sidata.t) / 100);

    };

    const r = (event) => {
        const tt = event.target.value;
        setIntrest({ ...sidata, r: Number(event.target.value) });
        setSi((sidata.p * tt * sidata.t) / 100);
    };

    const t = (event) => {
        const tt = event.target.value;
        setIntrest({ ...sidata, t: Number(event.target.value) });
        setSi((sidata.p * sidata.r * tt) / 100);

    };

    return <p>
        <input type="number" onChange={p}></input>
        <input type="number" onChange={r}></input>
        <input type="number" onChange={t}></input>
        <h2>{si}</h2>
    </p>


}
export default SimpleIntrest;