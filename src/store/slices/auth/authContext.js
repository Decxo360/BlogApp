import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  apellido:"",
  correo:'',
  esHabilitado:true,
  loading:false,
  name: "",
  password:"",
  user: "",
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startloadingData:(state,action)=>{
      state.loading = true
    },
    logIn:(state,action) =>{
        state.correo = action.payload.correo
        state.password = action.payload.password
    },
    logOut:(state)=>{
      state = initialState
    }
  },
})


export const {startloadingData,logIn,logOut} = authSlice.actions