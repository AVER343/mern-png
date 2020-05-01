import ACTION_TYPES from "./tasks.action.types";
import axios from 'axios'
import { getJWT } from "./task.utils";
export const LOAD_SUCCESS= (data)=>({
 type:ACTION_TYPES.LOAD_SUCCESS ,
 payload:data
})
export const DELETE_SUCCESS=(task)=>({
    type:ACTION_TYPES.DELETE_SUCCESS,
    payload:task
})
export const asyncLoad=(token)=>{
    return async dispatch=>{
        try{
            const requestOptions = {
                method: 'get',
                headers: {'Authorization':`Bearer ${token}` }
            };
            fetch(`http://localhost:7000/tasks/`, requestOptions)
                .then(response => response.json())
                .then(data =>dispatch(LOAD_SUCCESS(data)));
            }
            catch(e){
                    
            }
    }
}
export const asyncDelete=(id)=>{
    return async dispatch=>{
        try{
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json','Authorization':`Bearer ${getJWT()}` }
            };
            fetch(`http://localhost:7000/tasks/${id}`, requestOptions)
                .then(response => response.json())
                .then(data =>dispatch(DELETE_SUCCESS(data)));
            }
            catch(e){
                    
            }
    }
}
export const SAVING_FAV=(item)=>{
    return async dispatch=>{
        try{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json','Authorization':`Bearer ${getJWT()}` },
                body: JSON.stringify({item:item})
            };
            const res =await fetch('http://localhost:7000/tasks', requestOptions)
            const response = await res.json()
            await dispatch(LOAD_SUCCESS(response));
            console.log(response)
            }
            catch(e){

            }
    }
}
export const ADD_DATA=(item)=>({
    type:ACTION_TYPES.SAVING_DATA,
    payload:item
})
export const FAILURE=()=>({
    type:ACTION_TYPES.FAILURE
})