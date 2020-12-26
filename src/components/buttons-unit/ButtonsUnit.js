import React from 'react';

export default function CreateButtonsUnit() {
    const btnArr = [1, -1, 100, -100];

    return (
        <div>
            {btnArr.map(btn => <button>{btn}</button>)}
        </div>
    )
}