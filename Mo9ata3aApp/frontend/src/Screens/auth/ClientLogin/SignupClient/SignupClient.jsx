import React, { useState } from 'react';
import {Link , useNavigate} from "react-router-dom";
import axios from "axios";
import {Navigate} from "react-router-dom";
import { Zoom } from 'react-reveal';


const SignupClient = () => {
  
  const [fullName, setFullName] = useState('');
  const [email ,setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [age , setAge] = useState('');
  const [cin , setCin] =  useState();
  const [ville , setVille] =  useState();
  const [sex , setSex] =  useState();
  // const [user , setUser] = useState();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const {data} = await axios.post("http://localhost:8082/signup" , {
      fullName ,
      email :email ,
      password : password,
      age,
      sex,
      ville,
      cin
    });
    console.log(data);
    // localStorage.setItem("user" ,JSON.stringify(data));
    // setUser(data);
   
    navigate("/WaitList");
  
  }


  return (
    <div className='holder'>
        <Zoom bottom cascade>
          <form className='' onSubmit={handleSubmit}>

                  <h2 className='title-white'>make a demand</h2>
                  <input value={fullName} onChange={e => setFullName(e.target.value)}  type="text" placeholder='Enter your Fullname' name='' required className='input-ele' />  
                  <input value={email} onChange={e => setEmail(e.target.value)}  type="email" placeholder='Enter your email' name='' required className='input-ele' />  
                  <input value={password} onChange={e => setPassword(e.target.value)}  type="password" placeholder='Enter your password' name='' required className='input-ele' />  
                  <input value={cin} onChange={e => setCin(e.target.value)}  type="text" placeholder='Enter your cin' name='' required className='input-ele' />  
                  <input value={ville} onChange={e => setVille(e.target.value)}  type="text" placeholder='Enter your ville' name='' required className='input-ele' />  
                  <input value={sex} onChange={e => setSex(e.target.value)}  type="text" placeholder='Enter your sex' name='' required className='input-ele' />  
                  <input value={age} onChange={e => setAge(e.target.value)}  type="text" placeholder='Enter your age' name='' required className='input-ele ' />  
                  <div className='btns'>
                      <input type="submit"  className="btn back-btn text-white  btn-lg" value="submit demand" />
                      <Link to="/LoginClient" className='btn back-btn text-white btn-lg' >Login</Link>
                  </div>
          </form>
        </Zoom>
        {/* {user && <Navigate to={"/LoginClient"} replace={true} />} */}
    </div>
  )
}

export default SignupClient