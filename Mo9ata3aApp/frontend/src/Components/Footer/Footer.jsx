import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css";
import axios from "axios";
import {Alert} from "react-bootstrap";
import { Zoom } from 'react-reveal';


const Footer = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [user,setUser] = useState(localStorage.getItem("user"));

    const handleClick = async (e) => {
        e.preventDefault();
        const user = await axios.post("http://localhost:8082/login" , {
          email , password
        })
        setUser(user.data);
        localStorage.setItem("user" ,JSON.stringify(user.data));
        console.log(user.data);
      }
  return (
    <div className='Footer'>
        <Zoom bottom cascade>

            <h1 className='alert alert-dark text-dark fs-3 color-dark'> Make Faster and Secret with Mo9ata3a.ma</h1>
        <div className='d-flex flex-direction-row justify-content-around align-items-center w-100'>
            <div className=''>
                <Zoom bottom duration={1200} cascade>
                    <ul className='d-flex flex-column justify-content-center align-items-start '>
                        <li  className='li-element'>
                            <Link to="/" className='text-white item'>Home</Link>
                        </li>
                        <li className='li-element'>
                            <Link to="#about" className='text-white item'>About</Link>
                        </li>
                        <li className='li-element'>
                            <Link to="contact" className='text-white item'>Contact-us</Link>
                        </li>
                    </ul>
                </Zoom>
            </div>
            <Zoom bottom duration={1200} cascade>
                <form className='d-flex flex-column justify-content-center align-items-center w-50'  onSubmit={handleClick}>
                        <h2 className='title-white'>Login</h2>
                        <input  type="email" placeholder='Enter your email' onChange={e => setEmail(e.target.value)} value={email} name='' required className='input-ele' />  
                        <input  type="password" placeholder='Enter your password'   onChange={e => setPassword(e.target.value)} value={password} name='' required className='input-ele' />  
                        <div className='btns'>
                            <input type="submit"  className="btn btn-primary btn-lg" value="Login" />
                        </div>
                </form>
            </Zoom>

        </div>
        </Zoom>
    </div>
  )
}

export default Footer