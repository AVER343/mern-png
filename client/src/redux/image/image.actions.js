import ACTION_TYPES from "./image.action.types";
import axios from 'axios'
import { getJWT } from '../tasks/task.utils'
export const LOAD_SUCCESS=(list)=>({
    type:ACTION_TYPES.LOAD_SUCCESS,
    payload:list
})
export const LOAD_FAILED=()=>({
    type:ACTION_TYPES.LOAD_FAILED
})
export const Toggle=(isExisting)=>({
    type:ACTION_TYPES.TOGGLE,
    payload:isExisting
})
export const ImageLoad=()=>{
    return async dispatch=>{
        try{
            const res = await axios({method:'get', url: 'http://localhost:7000/image',headers:{'Authorization':`Bearer ${getJWT()}`}});
            if(res.status===200)
            {          
                dispatch(LOAD_SUCCESS(res.data.listArray))
            }
            else{
               dispatch(LOAD_FAILED())
            }
        }
        catch(e)
        {
            console.error(e)
        }
    }
}
