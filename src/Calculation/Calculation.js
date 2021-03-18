import React from 'react';
import './Calculation.css';

const Calculation = () => {
    return (

        <div className="cal">
            <h1 id="resultArea"><span id="show" ></span></h1>
            <br/>
            <br/>
            <input id="first" type="text" placeholder="first value" />
            <br/>
            <br/>
            <input id="second" type="text" placeholder="second value" />
            <br/>
            <br/>
            <button id="plus" >+</button>
            <button id="minus" >-</button>
            <button id="multiply">*</button>
            <button id="divaided">/</button>
            <br/>
            <button id="result">=</button>




        </div>
    );
};

export default Calculation;