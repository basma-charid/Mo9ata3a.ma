import React, {  useState } from 'react'
import "./Login.css";
import {Link} from "react-router-dom";
import axios from "axios";
import {Navigate} from "react-router-dom";
import {toast ,Toaster} from "sonner"
import { Zoom } from 'react-reveal';


const LoginClient = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [user,setUser] = useState(localStorage.getItem("user"));
  React.useEffect(() => {
    toast.success(" Hi Client try to Login !! ")
},[toast]);


  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post("http://localhost:8082/login" , {
        email , password
      })
      setUser(user.data);
      localStorage.setItem("user" ,JSON.stringify(user.data));
      console.log(user.data);
    } catch (error) {
      toast.loading("wrong data !!");
      
    }
  }
  
  return (
    <div className='holder'>
      <Toaster />
      <Zoom bottom cascade>
        <form className=''  onSubmit={handleClick}>
                <h2 className='title-white'>Login</h2>
                <input  type="email" placeholder='Enter your email' onChange={e => setEmail(e.target.value)} value={email} name='' required className='input-ele' />  
                <input  type="password" placeholder='Enter your password'   onChange={e => setPassword(e.target.value)} value={password} name='' required className='input-ele' />  
                <div className='btns'>
                    <input type="submit"  className="btn    back-btn text-white btn-lg" value="Login" />
                    <Link to="/SignUpClient" className='btn back-btn text-white  btn-lg' >Sign up ?</Link>
                </div>
        </form>
      </Zoom>
        {user && <Navigate to={"/HomePage"} replace={true} />}
    </div>
  )
}

export default LoginClient;