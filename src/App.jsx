import React from "react";
import Home from "./Pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lists from "./Pages/List/Lists";
import Hotel from "./Pages/hotel/Hotel";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {<Route path="/" element={<Home />} />}
          {<Route path="/hotels" element={<Lists />} />}
          <Route path="/hotels/:id" element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
