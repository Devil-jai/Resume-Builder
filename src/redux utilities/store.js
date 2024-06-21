import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './Template_1_slice'
import Template_2_Reducer from './Template_2_slice'
import Template_3_Reducer from './Template_3_slice'
import Template_4_Reducer from './Template_4_slice'


export const store = configureStore({
    reducer:{
       Userdata:UserReducer,
       Template_2_data:Template_2_Reducer,
       Template_3_data:Template_3_Reducer,
       Template_4_data:Template_4_Reducer
    }
})