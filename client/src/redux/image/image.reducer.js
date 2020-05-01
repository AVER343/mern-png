import ACTION_TYPES from './image.action.types'
const INTIAL_STATE={
    list:[],
    isLoading:true
}
const imageReducer = (state=INTIAL_STATE,action)=>{
    switch(action.type){
        case (ACTION_TYPES.LOAD_SUCCESS):
            return {list:[...action.payload],isLoading:false}
        case (ACTION_TYPES.LOAD_FAILED):
            return state
        default : return state
    }
}
export default imageReducer