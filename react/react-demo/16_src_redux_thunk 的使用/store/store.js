 // 该文件专门用于暴露一个 Store 对象
 import {configureStore} from '@reduxjs/toolkit'
 import countReducer from './features/count'
 import personReducer from './features/person'
 export const store = configureStore({
     reducer: {
         count: countReducer,
         person: personReducer
     }
 })