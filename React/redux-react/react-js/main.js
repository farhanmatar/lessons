// Here we import redux and take the method createStore
const redux = require('redux');
const createStore = redux.createStore;

// the first value for our store 
const firstStore = {
    name: 'Farhan',
    address: 'Berlin',
    job : 'devolper'
}
// Reducer for redux
const reducer = (state = firstStore,action) =>{
if((action.type==='Change_Name')){
    return({
        ...state,
        name:action.value,
       
    })
}
if((action.type==='Change_Address')){
    return({
        ...state,
        address:action.value
    })
}
  return state
}


//create store with the redux function createStore 
const store = createStore(reducer)
console.log(store.getState())

store.subscribe(()=>{
    console.log('Store has been update',store.getState())
})

//Dispatsch Actions
store.dispatch({
    type:'Change_Name',
    value:'Mansour',
   

})
store.dispatch({
    type:'Change_Address',
    value:'hamburg',
})
// console.log(store.getState());

