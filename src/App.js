import React, { useState, useReducer } from 'react'
import Routes from './routes'
import Context from './utils/context'
import * as Reducer from './store/hooks_state/hooks_reducer'
import * as UserReducer from './store/hooks_state/user_input_hooks_reducer'
import * as ACTIONS from './store/actions/actions'




const App = () =>  {
  

  /**
  |--------------------------------------------------
  | USED FOR CONTEXT GLOBAL STATE
  |--------------------------------------------------
  */

  const [stateGlobal, setStateGlobal] = useState(0)

  const incrementGlobalState = () => {
    setStateGlobal (stateGlobal +1)
  }

  const decrementGlobalState = () => {
    setStateGlobal (stateGlobal -1)
  }

/**
|--------------------------------------------------
| BELOW IS REDUCE IN CONTEXT TO MAKE IT PERSIST
|--------------------------------------------------
*/

    const [stateContextGlobal, dispatchContextGlobal] = useReducer(Reducer.HooksReducer, Reducer.initialState)

    const handleContextDispatchTrue = () => {
      // dispatch(ACTIONS.SUCCESS)
      // dispatch(type: "SUCCESS")

    dispatchContextGlobal(ACTIONS.success())
    }

  const handleContextDispatchFalse = () => {
    dispatchContextGlobal(ACTIONS.failure())
    }

    /**
    |--------------------------------------------------
    | FORM HOOKS REDUCE IN CONTEXT TO MAKE IT PERSIST
    |--------------------------------------------------
    */
    
    const [stateUser, dispatchUser] = useReducer(UserReducer.UserReducer, UserReducer.initialState)
    
    const handleUseContextChange = (event) => {
      dispatchUser(ACTIONS.user_input_change(event.target.value))
      
    }
  
    const handleUseContextSubmit = (event) => {
        event.preventDefault()
        event.persist()
        dispatchUser(ACTIONS.user_input_submit(event.target.redContextId.value))
    }
  

    return(
      <div>
      React
      <Context.Provider
        value = {{
          valueGlobalState: stateGlobal,
          addGlobalValue: () => incrementGlobalState(),
          decGlobalValue: () => decrementGlobalState(),

          reducerGlobalState: stateContextGlobal.stateprop2,
          dispatchContextTrue: () => handleContextDispatchTrue(),
          dispatchContextFalse: () => handleContextDispatchFalse(),

          useContextChange: stateUser.user_input_change,
          useContextSubmit: stateUser.user_input_submit,
          
          useContextHandleChange: (event) => handleUseContextChange(event),
          useContextHandleSubmit: (event) => handleUseContextSubmit(event)
        }}>
      <Routes />
      </Context.Provider>
      
      </div>
    )
}


export default App;
