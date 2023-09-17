 // 该文件专门用于暴露一个 Store 对象
 import {configureStore} from '@reduxjs/toolkit'
 import counterReducer from './slice/count'
 export const store = configureStore({
     reducer: {
         counter: counterReducer
     }
 })