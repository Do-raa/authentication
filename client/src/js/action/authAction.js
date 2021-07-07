import axios from "axios" ; 


import {LOGIN_USER ,
    LOGOUT,
    GET_AUTH_USER,
    REGISTER_USER ,
    AUTH_ERROR,
    SET_LOADING} from "./actionTypes"

 // register user
    export const register = (formData) =>async (dispatch) =>{
              dispatch(setLoading())
        try {
              const res = await axios.post("/api/auth/register" , formData) ;

              dispatch({
                  type :REGISTER_USER ,
                  payload : res.data
              })
        } catch(error) {
            console.dir(error)
            const errorsArray = error.response.data.errors
            const msg = error.response.data.msg
           
            
            if(Array.isArray(errorsArray)){
             errorsArray.forEach(el=>alert(el.msg))
         }
         if(msg)
         {
             alert(msg)
         }
            dispatch({
             type : AUTH_ERROR
         })
         }
    }

    // login user 

    export const login = (formData) =>async (dispatch) =>{
        dispatch(setLoading())
        try {
              const res = await axios.post("/api/auth/login" , formData) ;

              dispatch({
                  type :LOGIN_USER ,
                  payload : res.data
              })
        } catch(error) {
           console.dir(error)
           const errorsArray = error.response.data.errors
           const msg = error.response.data.msg
          
           
           if(Array.isArray(errorsArray)){
            errorsArray.forEach(el=>alert(el.msg))
        }
        if(msg)
        {
            alert(msg)
        }
           dispatch({
            type : AUTH_ERROR
        })
        }
    }



    // get auth user

    export const getAuthUser = () => async (dispatch) => {
        dispatch(setLoading())
        try {
         const option = {
             headers :{
                "authorization" : localStorage.getItem("token") 
             }
            
         }

              const res = axios.get("/api/auth/me" , option)
              dispatch ({
                  type : GET_AUTH_USER ,
                  payload : res.data ,
              })
        }catch(error){
          console.log(error)
          dispatch({
              type : AUTH_ERROR
          })
        }
    }



    const setLoading = () => dispatch => {
        dispatch({
            type :  SET_LOADING
        })
    }


    export const logout = () => dispatch =>{
        dispatch({
            type:LOGOUT
        })
    }