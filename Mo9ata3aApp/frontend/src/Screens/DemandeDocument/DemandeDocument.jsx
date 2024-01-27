import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
// import "./EgaliserDocument.css";
import { Link } from 'react-router-dom';
import {toast , Toaster} from "sonner";
import axios from "axios";


const DemandeDocument = () => {
    const [file, setFile] = useState();
    const [value , setValue] = useState("uploader votre carte national !");
    const [faire , setQuoiFaire] = useState();
    const [secret , setSecret] = useState();
    const [user , setUser] = useState(JSON.parse(localStorage.getItem("user")));

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        
        formData.append("file" , file);
        formData.append("pourquoi" , faire);
        formData.append("secret",secret);
        console.log(file);
        console.log(formData);
        try {
            const {data} = await axios.post("http://localhost:8082/createDemande/"+user.user_id, formData ,{
                headers: {
                    'Content-Type': 'multipart/form-data', 
                }
            });

            setQuoiFaire("");
            setFile("");
            setSecret("");
            setValue("choose a file to upload !");
            toast.loading("Document envoyer avec success , tsna y tsayeb");
        } catch (error) {
            console.log(error.message);            
        }
    }

    const handleChange = (e) => {
        setFile(e.target.files[0]); 
        setValue("uploaded !!"); 
        toast.success("file uploaded !");
    }

  return (
    <div className='contenaire w-100'>
        <Navbar  />
        <Toaster />
        <div className='holder'>
            <form className='' onSubmit={handleSubmit} >
                <h2 className='title-white'>Demander   Document !</h2>
                <textarea  type="text" placeholder='que voulez vous faire ?' value={faire} onChange={(e) => setQuoiFaire(e.target.value) }  name='' required className='input-ele p-2 ' />  
                <input  type="text" placeholder='code confidentiel pour obtenir document' value={secret} onChange={(e) => setSecret(e.target.value) }  name='' required className='input-ele' />  
                <label class="custom-file-upload">
                    <input type="file" onChange={handleChange}/>
                    {value}
                </label>                
                <div className='btns'>
                    <input type="submit"  className="btn btn-primary btn-lg" value="Envoyer" />
                    <Link to="/HomePage" className='btn btn-primary btn-lg' >Back</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default DemandeDocument
