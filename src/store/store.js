import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth/authContext'


export const store = configureStore({
  reducer: {
    auth:   authSlice.reducer,
  },
})