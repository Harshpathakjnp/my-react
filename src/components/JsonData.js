import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import './AllCss.css';
let jj = 0;
function JsonData() {
    const baseURL = `https://gist.githubusercontent.com/Harshpathakjnp/325cd1c503d6e4978e0a5eb8b561a8ec/raw/c530e8fae7f53363290c8ef4ea7f910ca8cb0c8b/MCQquestions`;
    const [star, setStar] = useState(null);
    const [j, setj] = useState(0);

    const jChangeHandler = (event) => {
        if (jj >= 8) {
            jj = -1
        }
        jj = jj + 1
        setj(jj)
        console.log(jj)
    }
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            let questions = response.data.questions
            setStar(questions);
        }).catch(error => {
           <p>error</p>
        });
    }, [setStar]);
    if (!star) return (<div>
            No Data
    </div>);


    return <div>
        <input type='radio' className='hiddenradios' name='option' checked ></input>
        <center>

            <table border={1}>
                <tr>
                    <td colSpan={2}><h1>Ques.{j + 1}.{star[j].question}</h1></td>
                </tr>
                <tr>
                    <td><label><input type='radio' name='option'></input>{star[j].opta}</label></td>
                    <td><label><input type='radio' name='option'></input>{star[j].optb}</label></td>
                </tr>
                <tr>
                    <td><label><input type='radio' name='option'></input>{star[j].optc}</label></td>
                    <td><label><input type='radio' name='option'></input>{star[j].optd}</label></td>
                </tr>
            </table>
            <br></br>
            
            <input type='button' value="Change Button" onClick={jChangeHandler} style={{ padding: "12px" }} ></input>
        </center>
    </div>;
}


export default JsonData;