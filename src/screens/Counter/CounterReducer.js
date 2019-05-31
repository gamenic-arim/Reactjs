
const init ={
    counter_value : 13
}
export default ( state=init , action )=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                ...state,
                counter_value : action.payload
            }
        case 'DECREMENT':
                return{
                    ...state,
                    counter_value : action.payload
                }
        default :
                return state
    }
}