import React, { useEffect, useState } from 'react'

import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [user , setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [fullName ,setFullName] = useState();
    const [email , setEmail] = useState();
    const [age , setAge] = useState();
    const  [phoneNumber , setPhoneNumber] = useState();
    const  [gender , setGender] = useState();
    const  [password , setPassword] = useState();

    console.log(user);
    const navigate = useNavigate();
    useEffect(  () => {
        const makeCall = async () => {
            const {data} = await  axios.get("http://localhost:8082/client/"+user.user_id);
           
            setUser(data);
            setFullName(data.fullName);
            setEmail(data.email);
            setAge(data.age);
            setPhoneNumber(data.phone);
            setGender(data.gender);
            setPassword(data.password);
        }
        makeCall();
        return ;
    },[axios]);



    const handleClick = async (event) => {
        event.preventDefault();
        const  {data} = await axios.post("http://localhost:8082/updateUser/"+user.user_id ,{
            fullName ,
            email ,
            phone : phoneNumber ,
            age : parseInt(age),
            gender
        });
        localStorage.setItem("user" , JSON.stringify(data));
        navigate("/homePage");
    }



  return (
    <div className='Profile'>
       <div className='contenaire'>
       <div className='holder'>
          <form className='' onSubmit={handleClick} >
                <h2 className='title-white'> Update  user profile </h2>
                <input onChange={e => setFullName(e.target.value)} value={fullName} type="text" placeholder='user Fullname' name='' required className='input-ele' />  
                {/* <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='user email' name='' required className='input-ele' />   */}
                <input onChange={e => setAge(e.target.value)} value={age} type="text" placeholder='user age' name='' required className='input-ele' />  
                <input onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber}  type="text" placeholder='user phone number' name='' required className='input-ele' />  
                <input onChange={e => setGender(e.target.value)} value={gender}  type="text" placeholder='user gender' name='' required className='input-ele' />  
                <input onChange={e => setPassword(e.target.value)} value={password}  type="text" placeholder='user passwod' name='' required className='input-ele' />  
                <div className='btns'>
                    <input type="submit"  className="btn btn-border btn-primary" value="update" />
                </div>
        </form>
    </div>
       </div>
    </div>
  )
}

export default Profile