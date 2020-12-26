import React from 'react';

export default function CreateButtonsUnit({btnArr, activateDispatch}) {

    return (
        <div>
            {btnArr.map(btn => <button onClick={() => activateDispatch('PLUS',btn)}>{btn}</button>)}
            <button onClick={() => activateDispatch('RESET')}>Reset</button>
        </div>
    )
}