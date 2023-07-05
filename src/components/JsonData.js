import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

function JsonData() {
    const baseURL = `https://gist.githubusercontent.com/Harshpathakjnp/325cd1c503d6e4978e0a5eb8b561a8ec/raw/c530e8fae7f53363290c8ef4ea7f910ca8cb0c8b/MCQquestions`;
    const [star, setStar] = useState(null);
    useEffect(() => {
        
        axios.get(baseURL).then((response) => {
            let questions = response.data.questions;
            console.log(questions[0].question);
            setStar(questions);
        }).catch(error => {
            setStar({ "name": "", "opt": "" });
        });
    }, []);
    if (!star) return (<div>
        <center>
            <input type="text" />
            <p>No Data</p>
        </center>
    </div>);
    return <div>
        <center>


            <h1>
               {star.map(current => {
                
                return <div><h1>q- {current.question}</h1>
                <h4>option {current.opta}</h4>
                <h4>option {current.optb}</h4>
                <h4>option {current.optc}</h4>
                <h4>option {current.optd}</h4>
                </div>

               })}
            </h1>


        </center>
    </div>;
}


export default JsonData;