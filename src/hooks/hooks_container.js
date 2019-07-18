import React, { useState, useEffect, useReducer, useContext } from 'react';

import * as Reducer from '../store/hooks_state/hooks_reducer'
import * as ACTIONS from '../store/actions/actions'
import Krofna from '../utils/context';

const HooksContainer1 = () => {
    
    const context = useContext(Krofna)



    const [stateValue, setValue] = useState(0)
    const [someValue, setSomeValue] = useState(null)

    const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState)

    useEffect( () => {
        setTimeout(()=> setSomeValue("useEffect WorkeD!"), 3000)
    }, [stateValue])

    const incrementValue = () => {
        setValue(stateValue + 1)
    }
    const decrementValue = () => {
        setValue(stateValue - 1)
    }

    const changeUseEffectValue = () => {
        setSomeValue('Some string to show changed value')
    }

    const handleDispatchTrue = () => {
        dispatch(ACTIONS.success())
    }

    const handleDispatchFalse = () => {
        dispatch(ACTIONS.failure())
    }
    return (
        <div>
            React hooks
            <br/>
            <button onClick = { () => changeUseEffectValue()}>Change Use Effect Value </button>
            <br/>{  someValue ? <p>{someValue}</p> : <p>No value</p> }
            <hr/>
            <button onClick = { () => incrementValue()}>Inc Local State </button>~
            <button onClick = { () => decrementValue()}>Dec Local State </button>
            <h2>Local State: {stateValue} </h2>

            <button onClick = { () => handleDispatchTrue()}>Dispatch Truee </button>~
            <button onClick = { () => handleDispatchFalse()}>Dispatch False </button>
            <h4> state prop1 from local HooksReducer state is  {state.stateprop1.toString()}</h4>
            
            <button onClick = { () => context.addGlobalValue()}>Add Global State </button>~
            <button onClick = { () => context.decGlobalValue()}>Dec Global State</button>
            <h2>Global State: {context.valueGlobalState}</h2>
            <button onClick = { () => context.dispatchContextTrue()}> Dispatch Context true</button>~
            <button onClick = { () => context.dispatchContextFalse()}>Dispatch Context false</button>

            <h4> state prop2 from context reducer is {context.reducerGlobalState.toString()} </h4>
        </div>
    );
};

export default HooksContainer1;