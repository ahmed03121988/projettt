 import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    
    title : "hello word",
    description : "user1@gmail.com",
    video : "https://youtu.be/ex3C1-5Dhb8?si=mrX5UjfFJtuDYvXL",
    image : "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
}

 const userSlice = createSlice({
  name : "hello word",
    initialState,
    reducers:{
      getUserList:(state,actions)=>{
        return actions.payload
      }
    }

 })


 export const {setMovieList}= userSlice.actions;
 export default userSlice.reducer