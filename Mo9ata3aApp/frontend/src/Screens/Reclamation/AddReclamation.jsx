import React, { useState } from 'react'
import {Link, Navigate , useNavigate} from "react-router-dom";
import axios from "axios";

const AddReclamation = () => {

    const [user ,setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [title, setTitle] = useState("");
    const [Contenu, setContenu] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("chi haja ferya hnaya !");
        const {data} = await axios.post("http://localhost:8082/createReclamation/"+user.user_id,{
            title , contenu : Contenu
        });
        console.log(data);
        setTitle("");
        setContenu("");
        navigate("/homePage");
        return data;
    }
    if(user == null){
        return (
            <Navigate to="/" replace={true} />
        )
    }else {
        if(user.role === "BASIC"){
            return (
                <>
                    <div className='contenaire'>
                        <div className='holder'>
                            <form className='' onSubmit={handleSubmit} >
                            <h2 className='title-white'>Add Reclamation !</h2>
                            <input  type="text" placeholder='Reclamation title' onChange={e => setTitle(e.target.value)} value={title} name='' required className='input-ele' />  
                            <input  type="text" placeholder='Reclamation COntenu'   onChange={e => setContenu(e.target.value)} value={Contenu} name='' required className='input-ele' />  
                            <div className='btns'>
                                <input type="submit"  className="btn back-btn text-white btn-lg" value="Submit reclamation" />
                                <Link to="/HomePage" className='btn back-btn text-white btn-lg' >Back</Link>
                            </div>
                            </form>
                        </div>
                    </div>
                
                </>                
            )            

        }else { 
            return (
                <Navigate to="/login" replace={true} />
            )
        }
    }

  return (
    <div>AddReclamation</div>
  )
}

export default AddReclamation;