import axios, { Axios } from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import FilmsComponent from './FilmsComponent';
import './Films.css';

function Films() {
    const [people, setPeople] = useState(1);
    const [star, setStar] = useState(null);
    const [films, setFilms] = useState(null);
    const baseURL = `https://swapi.py4e.com/api/people/${people}`;

    useEffect(() => {
        axios
            .get(baseURL)
            .then((response) => {
                console.log(response.data.films);
                setFilms(response.data.films);
                setStar(response.data);
            })
            .catch((error) => {
                <p className="error">There is an Error !!!!!!!</p>;
            });
    }, [people]);

    const peopleChangeHandler = (event) => {
        let n = event.target.value;
        if (n === '') n = '0';
        n = Number(n);
        setPeople(n);
        console.log(event.target.value);
    };

    if (!star)
        return (
            <div>
                <center>
                    <input type="text" onChange={peopleChangeHandler} />
                    <p className="error">No Data</p>
                </center>
            </div>
        );

    return (
        <div className="films-container">
            <input
                type="number"
                onChange={peopleChangeHandler}
                value={people}
                placeholder="Enter Value of People .."
            ></input>
            <p className="name">Name: {(star.name) ? star.name : 'No Data'}</p>
            <p className="mass">Mass: {(star.mass) ? star.mass : 'No Data'}</p>
            <center>
            <table border={1} >
                <tr>
                    <th>Link</th>
                    <th>Action</th>
                </tr>
                {films.map((current) => (

                    <tr key={current}>
                        <td>
                            <a href={current} className="film-link">{current}</a></td>
                        <td><FilmsComponent url={current}></FilmsComponent>
                        </td>
                    </tr>
                ))}
            </table>
            </center>
        </div>
    );
}

export default Films;
