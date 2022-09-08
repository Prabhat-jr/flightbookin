import React from 'react'
import {auth} from "../../friebaseConfig"
import "./Login.css";
import  {signInWithEmailAndPassword} from "firebase/auth" 
import {useNavigate} from "react-router-dom"
 
   
const Login = () => {
    const [email, setEmail]=React.useState("")
    const [password, setPassword]=React.useState("")
    const navigate=useNavigate()
        const loginHandler=()=>{
// /    console.log(email, password)
    signInWithEmailAndPassword(auth,email,password).then((user)=>{
    //    console.log(user)
    navigate("/")
    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
    })
        }
    return (
        <div className="loginpage">
           <from className="loginItem">
               <h1>Login</h1> 
               <div>
               <label>
                   Email
                   <br/>
                 <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" className="email" placeholder="email"/>
                 </label>
                </div>
               <div>
               <label className="input">
                   password
                   <br/>
                   <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" className="email" placeholder="create password"/>
               </label>
               </div>
               <button className="loginRegiter" onClick ={loginHandler} >Login</button>
           </from>
        </div>
    )
}

export default Login
