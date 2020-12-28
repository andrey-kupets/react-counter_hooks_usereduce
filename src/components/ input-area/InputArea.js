import React from 'react';

export default function CreateInputArea({activateDispatch, state: {inputValue}}) {
    return (
        <div>
            <label>Input Number</label>
            <input type={'number'} value={inputValue} onInput={({target: {value}}) => activateDispatch('SET_INPUTVALUE_TO_STATE', +value)}/>
            <button onClick={() => activateDispatch('SUBMIT')}>Submit</button>
        </div>
    );
}