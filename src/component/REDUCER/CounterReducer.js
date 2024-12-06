export const initialValue=0;

const CounterReducer=(state,action)=>{

    switch(action.type){
      case 'INCREMENT':
        return state + 1;

      case 'DECREMENT':
        return state - 1;

      case "INCREMENTBY2":
        return state + 2;

      case "DECREMENTBY2":
          return state - 2;
      case "RESET":
          return 0;

      case "INCREMENTBY?":
          return state + action.payload;

      case "DECREMENTBY?":
          return state - action.payload;
      
         default:
          return state;
    }
}

export default CounterReducer;
