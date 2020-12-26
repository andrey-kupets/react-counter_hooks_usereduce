const reducer = (state, action) => {
    const {type, payload} = action;
    const {result, inputValue} = state;

    switch (type) {
        case 'PLUS': {
            return (result + payload) > 0
                ? {...state, result: result + payload}
                : {...state, result: 0};
        }
        case 'RESET': {
            return {...state, result: 0}
        }
        case 'SET_INPUTVALUE_TO_STATE': {
            return {...state, inputValue: payload};
        }
        case 'SUBMIT': {
            return (result + inputValue) > 0
            ? {...state, result: result + inputValue}
            : {...state, result: 0};
        }
        default: {
            console.log(`Error! Action $(type) isn't valid. Try again`);
            return state;
        }
    }

};

export default reducer;

