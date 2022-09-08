import React from "react";
import "./navbar.css";
import {Link, useNavigate} from "react-router-dom"
import {onAuthStateChanged,signOut} from "firebase/auth"
import { auth } from "../../friebaseConfig";

const Navbar = () => {
 const [user, setUser] =React.useState("")
 const navigate=useNavigate()
  React.useEffect(()=>{
    onAuthStateChanged(auth,(users)=>{
setUser(users.uid)  
    })
  },[])


  const logoutHandler=()=>{
    signOut(auth).then(()=>{
      setUser("")
      navigate("/")
    }).catch((e)=>{
      console.log(e)
    })
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">lamabooking</span>
        {user ? "1 user login" :
        <div className="navItems">
          <Link to={"/register"} ><button className="navButton">Register</button></Link>
          <Link to={"/login"} ><button className="navButton">Login</button></Link>
        </div>}
       {user ? <div className="navItems">
         <button className="navButton" onClick={logoutHandler}>Logout</button>
        </div>
        :""}
      </div>
    </div>
  );
};

export default Navbar;
