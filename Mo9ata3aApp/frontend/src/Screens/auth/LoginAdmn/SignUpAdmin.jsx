import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import {Navigate , useNavigate} from "react-router-dom";

const SignUpAdmin = () => {


  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email ,setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [phoneNumber , setPhoneNumber] = useState('');
  const [admin , setAdmin] = useState();

    useEffect(() => {
      const admin = localStorage.getItem("admin");
      if(admin !== null){
        navigate("/");
      }else {
        navigate("/login")
      }
    },[]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const {data} = await axios.post("http://localhost:8082/adminSignup" , {
      fullName ,
      email :email ,
      password : password,
      phoneNumber: parseInt(phoneNumber)
    });
    console.log(data);
    localStorage.setItem("admin" ,data);
    setAdmin(data);
    setFullName("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
    if(localStorage.getItem("admin")){
      <Navigate to={"/ClientHomePage"}  />
    }else{
      <Navigate to={"/LoginClient"}  />
    }

  }
  return (
    <div className='holder'>
          <form className='' onSubmit={handleSubmit} >
                <h2 className='title-white'>Sign up</h2>
                <input onChange={e => setFullName(e.target.value)} value={fullName} type="text" placeholder='Admin Fullname' name='' required className='input-ele' />  
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='admin email' name='' required className='input-ele' />  
                <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder='admin password' name='' required className='input-ele' />  
                <input onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber}  type="text" placeholder='admin number' name='' required className='input-ele' />  
                <div className='btns'>
                    <input type="submit"  className="btn btn-border" value="Signup" />
                    <Link to="/LoginAdmin" className='btn' >Login</Link>
                </div>
        </form>
    </div>
  )
}

export default SignUpAdmin