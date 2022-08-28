import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
import App from "./App";
//import reportWebsites from "./reportWebVitals";
//import {BrowserRouter as Router} from "react-router-dom";

// import { AppProvider } from "./Context";

 //console.log(Sdata[0].sname);

const root= ReactDOM.createRoot(document.getElementById("root"))

root.render(
<React.StrictMode>
    {/* <AppProvider> */}
            <App/>
    {/* </AppProvider> */}
</React.StrictMode>
)
 
   

