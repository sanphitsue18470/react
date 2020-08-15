import React, { useState } from 'react';
import CharacterCard from './CharacterCard';

import _, { set, attempt } from 'lodash';
    const prepareStateFromWord = (given_word) => {
        let word = given_word.toUpperCase()
        let chars = _.shuffle(Array.from(word))
        return {
            word,
            chars,
            attempt: 1,
            guess: '',
            completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => { 
        console.log(`${c} has been activated.`) 

        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                alert("Ya!!");
                setState({...state, completed: true})
                 window.location.reload(false);
            }else{
                alert("Uhh!!");
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        }
    }

    return (
        <div>
            <h3>Your answer:{state.guess}</h3> 
            {
                state.chars.map((c,i) => 
                <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                )
            }
        </div>
    )
}