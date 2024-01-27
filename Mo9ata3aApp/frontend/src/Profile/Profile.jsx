import React, { useEffect, useState } from 'react'
import "./Profile.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [user , setUser] = useState({});
    const [fullName ,setFullName] = useState();
    const [email , setEmail] = useState();
    const [age , setAge] = useState();
    const  [phoneNumber , setPhoneNumber] = useState();
    const  [gender , setGender] = useState();

    const navigate = useNavigate();
    useEffect(  () => {
        const makeCall = async () => {
            const {data} = await  axios.get("http://localhost:8082/getMeAdmin/2")
            setUser(data);
            setFullName(data.admin_name);
            setEmail(data.email);
            setAge(data.age);
            setPhoneNumber(data.phone_number)
            setGender(data.gender);
        }
        makeCall();
        return ;
    },[axios]);



    const handleClick = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:8082/updateAdmin/2" , {
            fullName ,
            email ,
            phoneNumber ,
            age : parseInt(age),
            gender
        });
        navigate("/AreaHomePage");
    }



  return (
    <div className='Profile'>
       <div className='contenaire'>
       <div className='holder'>
          <form className='' onSubmit={handleClick} >
                <h2 className='title-white'> Update profile </h2>
                <input onChange={e => setFullName(e.target.value)} value={fullName} type="text" placeholder='Admin Fullname' name='' required className='input-ele' />  
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='admin email' name='' required className='input-ele' />  
                <input onChange={e => setAge(e.target.value)} value={age} type="text" placeholder='admin age' name='' required className='input-ele' />  
                <input onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber}  type="text" placeholder='admin number' name='' required className='input-ele' />  
                <input onChange={e => setGender(e.target.value)} value={gender}  type="text" placeholder='admin number' name='' required className='input-ele' />  
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