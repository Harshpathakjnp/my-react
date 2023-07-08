import axios, { Axios } from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import FilmsComponent from './FilmsComponent';
import Cr from './Cr';

function Films() {
    const [people, setPeople] = useState(1);
    const [star, setStar] = useState(null);
    const [films, setFilms] = useState(null);
    const baseURL = `https://swapi.py4e.com/api/people/${people}`;
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data.films);
            setFilms(response.data.films);
            setStar(response.data)

        }).catch(error => {
            <p>There is an Error !!!!!!!</p>
        });
    }, [people])
    

    const peopleChangeHandler = (event) => {
        let n = event.target.value;
        if (n == "")
            n = "0";
        n = Number(n);
        setPeople(n);
        console.log(event.target.value);
    }
    if (!star) return (<div>
        <center>
            <input type="text" onChange={peopleChangeHandler} />
            <p>No Data</p>

        </center>
    </div>);
    return (
        <div>

            <input type='number' onChange={peopleChangeHandler} value={people} placeholder='Enter Value of People ..'></input>
            <p>Name : {(star.name) ? star.name : "No Data "}</p>
            <p>Mass : {(star.mass) ? star.mass : "No Data "}</p>
            {films.map(current => {
                return (

                    <ul key={current}>
                        <li>
                            <a href={current}>{current}</a>
                            <FilmsComponent url={current}></FilmsComponent>
                        </li>

                    </ul>
                );
            })}
        </div>
    )
}

export default Films;
