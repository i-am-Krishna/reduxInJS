export const reducer =(state,action)=>{
    switch(action.type){
     case "Increment" : {
        return {
            ...state ,
            count: state.count++
        }
    }
    case "Decrement" : {
        return {
            ...state ,
            count: state.count--
        }
    }
    default: {
        return state
    }

}}