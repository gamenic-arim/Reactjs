
export const IncrementCounter = (count)=>{
    return{
        type : 'INCREMENT',
        payload : count + 1
    }
}
export const DecrementCounter = (count)=>{
    return{
        type : 'INCREMENT',
        payload : count - 1
    }
}