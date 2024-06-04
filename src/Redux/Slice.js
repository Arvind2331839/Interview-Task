import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
  allData:[],
  loading:false,
  error:null,
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},

    extraReducers(builder){
      builder
      .addCase(getdata.pending, (state, action) => {
        state.loading=true;
        })
       
        .addCase(getdata.fulfilled, (state, action) => {
          state.loading=false;
      state.allData=action.payload;
      state.error=null;
        })
      
        .addCase(getdata.rejected, (state, action) => {
          state.loading=false;
          state.error=action.error.message;
        })
     },
  })
  
 
  
  // export const { createPost } = dataSlice.actions
  
  export default dataSlice.reducer;

  //Thunk
 export const getdata =createAsyncThunk("create/get",async()=>{
    const res=await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(res)
    return res.data

  })