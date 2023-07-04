import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import './HelloEffect.css';

function HelloEffect() {
    const [people, setPeople] = useState(1);
    const baseURL = `https://swapi.py4e.com/api/people/${people}`;
    const [star, setStar] = useState(null);
    const [films, setFilms] = useState(null);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
console.log(response.data.films);
            setStar(response.data);
            setFilms(response.data.films);
        }).catch(error => {
            setStar({"name":"","mass":""});
            setFilms(['No Data']);
            //setError(error);
          });
    }, [people]);
    const peopleChange = (event) => {
        let n=event.target.value;
       n=n.trim();
       if(n=="")
       n="0";
       n=Number(n);
        setPeople(n);
        console.log(event.target.value);
    }
    if (!star) return (<div>
        <center> 
            <input type="text"    onChange={peopleChange}/>
            <p>No Data</p>

        </center>
    </div>);


        return <div>
        <center> 
            <input type="text" value={people}  onChange={peopleChange}/>
            <p>Name {(star.name)?star.name:"No Data"}</p>
            <p>Mass {(star.mass)?star.mass:"No Data"}</p>
            
            {films.map(current => {
                    return (
                        <ul className='liwidth' key={current}>
                            <li> <a target={"_blank"} href={current}>{current}</a>


                            </li>
                        </ul>
                    );
                })}


        </center>
    </div>;
}


export default HelloEffect;