import React, { useState } from 'react';

function App(){
    
    const [state, setState] = useState([]);

    const generateRandomNumber = () => {
        let number;
        let randomNumber = Math.floor(Math.random() * 50) + 1;

        if( !state.includes(randomNumber) ){
            number = randomNumber;
            console.log('Going to add the number to array');
        }
        else{
            console.log(`Not adding this number -> ${randomNumber}`);
        }

        return number;
    }
    
    const changeState = () => {
        let returnedRandomNumber = generateRandomNumber();
        if(state.length < 5){
            if( returnedRandomNumber !== undefined ){
                setState(state => [...state, returnedRandomNumber])
            }
        }
    }

    return(
        <div>
            <button onClick={changeState}> Generate Numbers </button>
            <p> 
                {
                   state.map( (value,id) => {
                       return(
                           <li key={id}> {value} </li>
                       )
                   })
                } 
            </p>
        </div>
	)
 }

export default App;