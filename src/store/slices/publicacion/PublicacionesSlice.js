import { createSlice } from '@reduxjs/toolkit';


initialState = {

    page:"",
    publicaciones:[],
    isLoading:true

}


export const PublicacionSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        startLoadingPublication:(state)=>{
            state.isLoading = false
        },
        setPublications:(state,action)=>{
            state.publicaciones = [{}]
        }
    }
});


// Action creators are generated for each case reducer function
export const {startLoadingPublication,setPublications} = PublicacionSlice.actions;