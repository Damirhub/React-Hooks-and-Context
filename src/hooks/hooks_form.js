import React, {useState, useReducer, useContext} from 'react';
import * as ACTIONS from '../store/actions/actions'
import * as UserReducer from '../store/hooks_state/user_input_hooks_reducer'

const HooksForm = () => {

    const [valueChange, setValueChange] = useState('')
    const [valueSubmit, setValueSubmit] = useState('')

    const [userState, userDispatch] = useReducer(UserReducer.UserReducer, UserReducer.initialState)

    /**
    |--------------------------------------------------
    | useState VERSION  
    |--------------------------------------------------
    */

    const handleUseStateChange = (event) => {
        setValueChange(event.target.value)
        
    }
    
    const handleUseStateSubmit = (event) => {
        event.preventDefault()
        setValueSubmit(event.target.useState.value)
        
    }
    
    /**
    |--------------------------------------------------
    | useReducer VERSION
    |--------------------------------------------------
    */

    const handleUseReducerChange = (event) => {
        userDispatch(ACTIONS.user_input_change(event.target.value))
        
    }
    
    const handleUseReducerSubmit = (event) => {
        event.preventDefault()
        userDispatch(ACTIONS.user_input_submit(event.target.useReducer.value))
    }
    
    
    
    return (
        <div>

            {/*   /**
            |--------------------------------------------------
            | useState VERSION  
            |--------------------------------------------------
            */}
        
            <h2> React useState </h2>
            <form onSubmit = {handleUseStateSubmit}>
                <label>React useState </label>
                <input id = 'useState' type = 'text' onChange = {handleUseStateChange} />
                <button type = 'submit'> Submit </button>
            </form>


            <div>
                <p>Change: {valueChange}</p>
                <p>Submit: {valueSubmit}</p>
            </div>

            {/* /**
                |--------------------------------------------------
                | useReducer version
                |--------------------------------------------------
            */ }


            <h2> React useReducer </h2>

            <form onSubmit = {handleUseReducerSubmit}>
                <label>React useReducer </label>
                <input id = 'useReducer' type = 'text' onChange = {handleUseReducerChange} />
                <button type = 'submit'> Submit </button>
            </form>
            
            <div>
                <p>Change: {userState.user_input_change}</p>
                <p>Submit: {userState.user_input_submit}</p>
            </div>
            

        </div>
    );
};

export default HooksForm;

