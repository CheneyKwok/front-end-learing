 // 该文件专门用于暴露一个 Store 对象
 import {configureStore} from '@reduxjs/toolkit'
 import countReducer from './reducers/count'
 import personReducer from './reducers/person'
 export const store = configureStore({
     reducer: {
         count: countReducer,
         person: personReducer
     }
 })