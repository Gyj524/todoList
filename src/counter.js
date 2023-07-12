import React, {useReducer} from "react"

function reducer(state, action){
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
  }
}

function Counter(){
  const [oldCount, countDispatch] = useReducer(reducer, 0);
  const onIncrease = () => {
    countDispatch({type: 'INCREMENT'});
  };
  const onDecrease = () => {
    countDispatch({type: 'DECREMENT'});
  };
  const onReset = () => {
    countDispatch({type:'RESET'});
  };
  return(
    <div>
      <h1>{oldCount}</h1>
      <input type="button" value="up" onClick={onIncrease}/>
      <input type="button" value="reset" onClick={onReset}/>
      <input type="button" value="down" onClick={onDecrease}/>
    </div>
  );
}

export default Counter;