import {LOGIN_USER ,
    LOGOUT,
    GET_AUTH_USER,
    REGISTER_USER ,
    AUTH_ERROR,
    SET_LOADING} from "../action/actionTypes"

    const initialState ={
        token : localStorage.getItem("token") ,
        user : null , 
        isAuth : false ,
        isLoading : false ,
        msg : null
    }

    export default function (state = initialState , {type , payload}) {
        switch(type)
        {
            case REGISTER_USER :
                case LOGIN_USER :
                    localStorage.setItem("token" , payload.token)
                return {...state , isLoading : false , isAuth : true , ...payload}

                case GET_AUTH_USER :
                    return {...state , isLoading : false , isAuth : true , ...payload }

                    case SET_LOADING :
                        return {...state , isLoading : true 
                        }

                        case LOGOUT :
                            localStorage.removeItem("token")
                            return {...state , user : null , token : null  ,isAuth : false}
                        
                
             default :
             return state ;
        }
    }