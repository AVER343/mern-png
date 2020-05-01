import ACTION_TYPES from "./user.actions.types";
import axios from "axios";
import { getJWT } from "../tasks/task.utils";
import { LOAD_SUCCESS } from "../tasks/task.actions";
export const Login =()=>({
    type:ACTION_TYPES.LOGIN
})
export const LoginSuccess=(user)=>({
    type:ACTION_TYPES.LOGIN_SUCCESS,
    payload:user
})
export const LoginFailure=()=>({
    type:ACTION_TYPES.LOGIN_FAILURE
})
export const Logout =()=>({
    type:ACTION_TYPES.LOGOUT
})
export const asyncLogIn = (user) => {
    return async (dispatch) => {
        const{email,password}=user
    try{
        const res=await axios.post('http://localhost:7000/login', {email,password})
        if(res.status===200)
        {        
            console.log(res.data)
           await dispatch(LoginSuccess(res.data))
        }
        else{
            dispatch(LoginFailure());
        }
    }
    catch(e)
    {
        console.error(e)
    }
    };
  };
  export const asyncLogOut = () => {
    return async (dispatch) => {
    try{
        
        const res =await axios({method: 'post', url: 'http://localhost:7000/logout',headers:{'Authorization':`Bearer ${getJWT()}`}});
        if(res.status===200)
        {            
           
            dispatch(Logout())
        }
        else{
            dispatch(Logout());
        }
    }
    catch(e)
    {
        console.error(e)
    }
    };
  };
  export const asyncSignUp= (user) => {
    return async (dispatch) => 
    {
        const {name,email,password} = user
        try{
            const res=await axios.post('http://localhost:7000/signup', {name,email,password})
            if(res.status===200)
            {   
                console.log(res.data)         
                dispatch(LoginSuccess(res.data))
            }
            else{
                dispatch(Logout());
            }
        }
        catch(e)
        {
            console.error(e)
        }
    };
  };