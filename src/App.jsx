import React from "react";
import Home from "./Pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lists from "./Pages/List/Lists";
import Hotel from "./Pages/hotel/Hotel";
import Register from "./Components/register/Register";
import Login from "./Components/login/Login";
// import Stays from "./Components/Stays/Stays";
const App = () => {
  return (
    <div>
       <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
         {/* <Route path="/stay" element ={<Stays/>}/> */}
          <Route path="/hotels" element={<Lists />} />
          {/* <Route path="stays" element={<Lists/>}/> */}
          <Route path="/hotels/:id" element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
