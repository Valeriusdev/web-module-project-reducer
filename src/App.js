import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/index';
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import { addOne, applyNumber } from './actions/index';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleClick = (e) => {
  //   console.log("dispatch addOne action")
  //   dispatch(addOne(e.target.value));
  // };

  const handleClick = (e) => {
    console.log("dispatch applyNumber action")
    dispatch(applyNumber(e.target.value));
  };

  

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      {console.log("state.total: ", state.total)}

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">         
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleClick} />
              <CalcButton value={2} onClick={handleClick} />
              <CalcButton value={3} onClick={handleClick} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleClick} />
              <CalcButton value={5} onClick={handleClick} />
              <CalcButton value={6} onClick={handleClick} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleClick} />
              <CalcButton value={8} onClick={handleClick} />
              <CalcButton value={9} onClick={handleClick} />
            </div>

            <div className="row">
              <CalcButton value={"+"}/>
              <CalcButton value={"*"}/>
              <CalcButton value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
