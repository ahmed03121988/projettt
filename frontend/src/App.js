import { useEffect } from "react";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login"
import {Routes,Route} from "react-router-dom"
import UserDash from "./pages/user/user"
import UserRoute from "./PrivateRoutes/userRoute"
import AdminRoute from "./PrivateRoutes/adminRoute"
import AdminDash from "./pages/admin/admin"
import Navigation from "./components/NavBar"
import { getMovie } from "./api/movieApi";

function App() {

  useEffect (()=>{
    getMovie()
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  })
  return (
    <div className="wrapper">
<Navigation/>
<Routes>
  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>

  //route for a connected simple user
  <Route element={<UserRoute/>}>
    <Route path="/userDash" element={<UserDash/>}/>

  </Route>

  // route for connected admin
  <Route element={<AdminRoute/>}>
    <Route path="/adminDash" element={<AdminDash/>}/>

  </Route>
</Routes>





      
    </div>
  );
}
export default App;
