import React, { useState, useEffect, useReducer, useContext } from 'react';

import * as Reducer from '../store/hooks_state/hooks_reducer'
import * as ACTIONS from '../store/actions/actions'
import Krofna from '../utils/context';

const HooksContainer1 = () => {
    
    const context = useContext(Krofna)
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", context)



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
        // dispatch(ACTIONS.SUCCESS)
         // dispatch(type: "SUCCESS")

        dispatch(ACTIONS.success())
    }

    const handleDispatchFalse = () => {
        dispatch(ACTIONS.failure())
    }
    return (
        <div>
            React hooks
            <button onClick = { () => incrementValue()}>Inc Local State </button>
            <button onClick = { () => decrementValue()}>Dec Local State </button>
            <button onClick = { () => changeUseEffectValue()}>change Use Effect Value </button>

            <button onClick = { () => handleDispatchTrue()}>Dispatch Truee </button>
            <button onClick = { () => handleDispatchFalse()}>Dispatch False </button>

            <button onClick = { () => context.addGlobalValue()}>Add Global </button>
            <button onClick = { () => context.decGlobalValue()}>Dec Global </button>

            <button onClick = { () => context.dispatchContextTrue()}> Dispatch COntext  true</button>
            <button onClick = { () => context.dispatchContextFalse()}>Dispatch COntext  false</button>

            <div>rsc
                <br/>
                    {
                    someValue ? <p>{someValue}</p> : <p>No value</p> 
                    }
                <br/>
                {state.stateprop1
                ? <p> state prop1 is true</p> : <p> state prop1 is False</p>}
                <br/>

                {context.reducerGlobalState
                    ? <h4> stete prop2 is true </h4>
                    : <h4> statte prop2 is False </h4>
                }

                <p>Local State: {stateValue} </p>
                <br/>
                <hr/>
                <p>Global State: {context.valueGlobalState}</p>

            </div>

            <h2>{stateValue}</h2>
        </div>
    );
};

export default HooksContainer1;