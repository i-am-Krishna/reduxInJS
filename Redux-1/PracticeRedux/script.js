import {store} from './store.js'
import {reducer} from './reducer.js'


const nstore = new store(reducer,{count:0})


let value = 0 ;
let counter = document.getElementById("counter")
counter.innerText = nstore.getState().count ;

let inc = document.getElementById("increment")
let dec = document.getElementById("decrement")

inc.addEventListener("click",()=>{
    nstore.dispatch({
        type:"Increment"
    })
    counter.innerText = nstore.getState().count ;
}),

dec.addEventListener("click",()=>{
nstore.dispatch({
    type:"Decrement"
})
counter.innerText = nstore.getState().count ;
})