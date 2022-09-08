import React from 'react'
 import "./Register.css";
 import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../friebaseConfig"
import {useNavigate} from "react-router-dom"

const Register = () => {
const [email, setEmail]=React.useState("")
const [password, setPassword]=React.useState("")
const [passwordConfirm, setPasswordConfirm]=React.useState("")
const navigate=useNavigate()

    const registerHandler=()=>{
        createUserWithEmailAndPassword(auth,email,password).then((user)=>{
  //  console.log(user)
  navigate("/")

}).catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
})
    }
    return (
        <div className="registerpage">
           <from className="registerItem">
               <h1>Sign up</h1> 
               <div>
               <label>
                   Email
                   <br/>
                 <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" className="email" placeholder="email" required/>
                 </label>
                </div>
               <div>
               <label className="input">
                   password
                   <br/>
                   <input value={password}  onChange={(e)=>setPassword(e.target.value)} type="password" name="password" className="email" placeholder="create password"/>
               </label>
               </div>
               <div>
               <label>
                   Password Confirmation
                   <br/>
                   <input value={passwordConfirm} onChange={(e)=>setPasswordConfirm(e.target.value)}  type="password" name="passwordConfirmation" className="email" placeholder="password confirmation"/>
               </label>
               </div>
               <button className="registerRegiter" onClick={registerHandler}>Register</button>
           </from>
        </div>
    )
}

export default Register
