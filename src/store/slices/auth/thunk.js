import { logIn, startloadingData } from "./authContext"

export const getUser = (correo,password) =>{
    return (dispatch,logIn)=>{
        dispatch(startloadingData());
        //TODO:llamada a axios


    }
}