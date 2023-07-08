import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'

function FilmsComponent(props) {


    const [num, setNum] = useState(true);
    const [title, setTitle] = useState("");
    const [films, setFilms] = useState("");
    const [baseURL, setBaseURL] = useState(props.url)

    console.log(props.url);
    const ButtonClickHandler = () => {
        setNum(!num)
        axios.get(baseURL).then((response) => {
            console.log(response.data);
            setFilms(`Director : ${response.data.director}`);
            setTitle(`Title : ${response.data.title}`)
        }).catch(error => {
            <p>There is an Error !!!!!!!</p>
        });
    };

    return (
        <div>
            <button onClick={ButtonClickHandler}>Click Here</button>
            <p > {(title) ? title : ""} </p>
            <p> {(films) ? films : ""}</p>


        </div>
    )
}

export default FilmsComponent;
