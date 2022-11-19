import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import charReducer from '../features/characterMain/charSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    character: charReducer
  }
})
