import React, { useState } from "react";
const MarksCalculator = () => {
    const [physics, setPhysics] = useState(0);
    const [chemistry, setChemistry] = useState(0);
    const [maths, setMaths] = useState(0);
    const [english, setEnglish] = useState(0);
    const [hindi, setHindi] = useState(0);
    const [total, setTotal] = useState(0);

    const physicsMarksHandler = (event) => {
        setPhysics(Number(event.target.value));
    };

    const chemistryMarksHandler = (event) => {
        setChemistry(Number(event.target.value));
    };

    const mathsMarksHandler = (event) => {
        setMaths(Number(event.target.value));
    };

    const englishMarksHandler = (event) => {
        setEnglish(Number(event.target.value));
    };

    const hindiMarksHandler = (event) => {
        setHindi(Number(event.target.value));
    };

    const submitButtonHandler = (event) => {
        event.preventDefault();
        console.log("Submitted");
        setTotal((physics + chemistry + maths + hindi + english) / 5)
    };

    const gradeChecker = (p) => {
        if (p > 70) {
            return 'A'
        }
        else {
            return 'B'
        }
    }

    return <form onSubmit={submitButtonHandler}>
        <label>Physics</label>
        <input type="Number" onChange={physicsMarksHandler}></input>

        <label>Chemistry</label>
        <input type="Number" onChange={chemistryMarksHandler}></input>

        <label>Maths</label>
        <input type="Number" onChange={mathsMarksHandler}></input>

        <label>English</label>
        <input type="Number" onChange={englishMarksHandler}></input>

        <label>Hindi</label>
        <input type="Number" onChange={hindiMarksHandler}></input>
        <h3>Physics = {physics}     Chemistry = {chemistry}</h3>
        <h3>Maths = {maths}         English = {english}</h3>
        <h3>Hindi = {hindi} </h3>
        <br></br>
        <h1>Percentage = {total}                Grade = {gradeChecker(total)}</h1>
        <input type="submit" value="Submit"></input>


    </form>








}
export default MarksCalculator;