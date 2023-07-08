import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import './Films.css';

function FilmsComponent(props) {


    const [num, setNum] = useState(true);
    const [title, setTitle] = useState("");
    const [films, setFilms] = useState("");
    const [baseURL, setBaseURL] = useState(props.url)

    console.log(props.url);
    const buttonClickHandler = () => {
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
            <button className='button' onClick={buttonClickHandler}>Click Here</button>
            <p > {(title) ? title : ""} </p>
            <p> {(films) ? films : ""}</p>


        </div>
    )
}

export default FilmsComponent;
