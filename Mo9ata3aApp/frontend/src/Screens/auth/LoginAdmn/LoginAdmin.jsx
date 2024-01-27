import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import {Navigate} from "react-router-dom";
import { Zoom } from 'react-reveal';
import {toast ,Toaster} from "sonner";

const LoginAdmin = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [user,setUser] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post("http://localhost:8082/adminLogin" , {
        email , password
      })
      console.log(user.data);
      localStorage.setItem("admine" ,JSON.stringify(user.data));
      setUser(user.data);
    } catch (error) {
      console.log(error.message);
      toast.loading("wrong data  :(");
    }
  }

  return (
    <div className='holder'>
      <Zoom bottom cascade>
        <Toaster />
        <form  onSubmit={handleClick} >
                <h2 className='title-white'>Login</h2>
                <input  type="email" placeholder='admin email' name='' value={email} onChange={e => setEmail(e.target.value) }required className='input-ele' />  
                <input  type="password" placeholder=' admin password ' value={password} onChange={e => setPassword(e.target.value) }name='' required className='input-ele' />  
                <div className='btns'>
                    <input type="submit"  className="btn back-btn text-white btn-lg" value="Login" />
                </div>
        </form>
      </Zoom>
        {user && <Navigate to={"/AreaHomePage"} replace={true} />}
    </div>
  )
}

export default LoginAdmin