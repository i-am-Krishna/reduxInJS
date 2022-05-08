import {Store} from './Store.js'
import { reducer } from './Reducer.js'

const store = new Store(reducer,{count:0})
//  const store = new Store(()=>{},0)


// let value = 0 ;
let counterValue = document.getElementById("counterValue")

let inCounter = document.getElementById("inCounter")

let deCounter = document.getElementById("deCounter")

let inputV = document.getElementById("inputV")

inputV.addEventListener("keyup", inputData)
function inputData(){

    
    var inputNum = inputV.value 
    console.log(inputNum)

    let add = document.getElementById("add")
    add.addEventListener("click",()=>{
    console.log(counterValue.innerText*5)
    counterValue.innerText= store.getState().count+Number(inputNum) ;
    })

    let sub = document.getElementById("sub")
    sub.addEventListener("click",()=>{
    counterValue.innerText= store.getState().count-Number(inputNum) ;
    })

    let multiply = document.getElementById("multiply")
    multiply.addEventListener("click",()=>{
        counterValue.innerText= store.getState().count*Number(inputNum);
    })

    let divide = document.getElementById("divide")
    divide.addEventListener("click",()=>{
        counterValue.innerText= store.getState().count/Number(inputNum);
    })




}

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
// add.addEventListener("click", function (){
//     // store.dispatch({
//     //     type:"INCREMENT",
//     // })
//     // counterValue.innerText= store.getState().count;

 
// })




// <div class="inputValue"><input type="text" name="value" id="inputV"></div>
// <div><button class="add">Add</button></div>
// <div><button class="sub">Sub</button></div>
// <div><button class="multiply">Multiply</button></div>
// <div><button class="divide">Divide</button></div>