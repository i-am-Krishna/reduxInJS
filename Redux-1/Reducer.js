
export const reducer = (state,action) =>{
    // return {...state} ;
    switch(action.type){
        case "INCREMENT":{
            return {
                ...state,
                count:state.count++
            }
        }
        case "DECREMENT":{
            return {
                ...state,
                count:state.count--
            }
        }
        default:{
            return state ;
        }
    }
}
