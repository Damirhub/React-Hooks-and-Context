import React, { useState, useReducer } from 'react'
import Routes from './routes'
import Context from './utils/context'
import * as Reducer from './store/hooks_state/hooks_reducer'
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
          dispatchContextFalse: () => handleContextDispatchFalse()
        }}>
      <Routes />
      </Context.Provider>
      
      </div>
    )
}


export default App;
