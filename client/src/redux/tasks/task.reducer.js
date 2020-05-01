import ACTION_TYPES from "./tasks.action.types"

const INITIAL_STATE={
    tasks:null,
    isLoading:true
}

const taskReducer = (state=INITIAL_STATE,action)=>{
        switch(action.type)
        {
            case (ACTION_TYPES.LOAD_SUCCESS): 
            console.log(action.payload)
                return {...state,tasks:action.payload.favourites,isLoading:false}
            case (ACTION_TYPES.FAILURE):
                return state
            case (ACTION_TYPES.DELETE_SUCCESS):
                return {...state,tasks:action.payload.favourites,isLoading:false}
            case (ACTION_TYPES.SAVING_DATA):
                return {...state,tasks:[...state.tasks,action.payload]}
            default :
                return state
        }
}
export default taskReducer

