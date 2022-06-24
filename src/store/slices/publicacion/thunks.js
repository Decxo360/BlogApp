import { setPublications, startLoadingPublication } from "./PublicacionesSlice"



export const getPublicaciones = ( page = 0 ) => {
    return async(dispatch,getState) => {
        dispatch(startLoadingPublication());

        // TODO: realizar la peticion http
        // dispatch(setPublications())
        
    }
}