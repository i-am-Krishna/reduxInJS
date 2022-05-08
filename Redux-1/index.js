import {Store} from './Store.js'
import { reducer } from './Reducer.js'

const store = new Store(reducer,{count:0})
//  const store = new Store(()=>{},0)


// let value = 0 ;
let counterValue = document.getElementById("counterValue")

let inCounter = document.getElementById("inCounter")

let deCounter = document.getElementById("deCounter")

counterValue.innerText = store.getState().count;

inCounter.addEventListener("click", function (){
    store.dispatch({
        type:"INCREMENT",
    })
    counterValue.innerText= store.getState().count;
 
})
deCounter.addEventListener("click", function (){
    store.dispatch({
        type:"DECREMENT",
    })
    counterValue.innerText= store.getState().count;

})