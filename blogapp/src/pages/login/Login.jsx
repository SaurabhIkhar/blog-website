import { Link } from "react-router-dom";
import {Context} from "../../context/Context";
import "./login.css";
import axios from "axios";
import { useContext, useRef } from "react";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isFetching } = useContext(Context)


  const handleSubmit = async (e)=>{
    e.preventDefault();
    dispatch({type:"Login_Start"});
    try{
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })

      dispatch({type:"Login_Success", payload: res.data});
    }catch(err){
      dispatch({type:"Login_Failure"});
    }
  }

  return (
    <div className="login">
        <span className="loginTitle">Login...</span>
      <form  className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className="loginInput" placeholder="Enter your username..." ref={userRef} />
        <label >Password</label>
        <input type="password" className="loginInput" placeholder="Enter your password..." ref={passwordRef} />
        <button className="loginbutton" type="submit" disabled={isFetching}>Login</button>
      </form>
      <button className="loginRegisterbutton" ><Link className='link' to="/register" >REGISTER</Link></button>
    </div>
  )
}
