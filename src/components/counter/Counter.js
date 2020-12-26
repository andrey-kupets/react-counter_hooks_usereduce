import React, {useReducer} from 'react';
import Title from "../title/Title";
import initialState from "../intial-state/InitialState";
import reducer from '../reducer/reducer';
import Result from "../result/Result";
import CreateButtonsUnit from "../buttons-unit/ButtonsUnit";
import CreateInputArea from "../ input-area/InputArea";

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const activateDispatch = (type, payload) => {
        dispatch({type, payload})
    };

    return (
        <div>
            <Title/>
            <Result result={state.result}/>
            <CreateButtonsUnit btnArr={state.btnArr} activateDispatch={activateDispatch} />
            <CreateInputArea activateDispatch={activateDispatch} state={state}/>
        </div>
    )
}