import {createSlice} from '@reduxjs/toolkit'

const userslice=createSlice({
    name:"login",
    initialState:{
        logged:null
    },
    reducers:{
        loginInfo:(state,action)=>{
state.logged=action.payload
        },
        logoutData:(state,action)=>{
            state.logged=null
        }
    }
})

export const {loginInfo,logoutData}=userslice.actions
export default userslice.reducer