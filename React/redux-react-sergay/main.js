//reducer
 function counter (state = 0,action){
     switch(action.type){
      case 'INCREMENT':
         return state + 1;
      case 'DECREMENT':
         return state -1;
         case'ODD_INCREMENT':
         return state +2
         
        default:
        return state;
     }
 }

 // store  (subscribe function ,dispatch getState)
 let store = Redux.createStore(counter);//expose store  with registerd counter 
  
 // subscribe
 function printState(){
     console.log(store.getState());
 }


store.subscribe(printState);

// Actions
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})