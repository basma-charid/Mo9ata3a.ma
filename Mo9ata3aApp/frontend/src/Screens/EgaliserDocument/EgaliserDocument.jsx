import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./EgaliserDocument.css";
import { Link } from 'react-router-dom';
import {toast , Toaster} from "sonner";
import axios from "axios";

const EgaliserDocument = () => {
    const [file, setFile] = useState();
    const [value , setValue] = useState("choose a file to upload !");
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
            const {data} = await axios.post("http://localhost:8082/createDoccumentToEgalisate/"+user.user_id, formData ,{
                headers: {
                    'Content-Type': 'multipart/form-data', 
                }
            });
            setQuoiFaire("");
            setFile("");
            setSecret("");
            setValue("choose a file to upload !");
            toast.info("Document envoyer avec success , tsna y tegalisa");
        } catch (error) {
            console.log(error.message);            
        }
    }

    const handleChange = (e) => {
        setFile(e.target.files[0]); 
        setValue("uploaded !!") ; 
        toast.success("file uploaded !")
    }

  return (
    <div className='contenaire w-100'>
        <Navbar/>
        <Toaster />
        <div className='holder'>
            <form className='' onSubmit={handleSubmit} >
                <h2 className='title-white'>Egaliser  Document !</h2>
                <input  type="text" placeholder='que voulez vous faire ?' value={faire} onChange={(e) => setQuoiFaire(e.target.value) }  name='' required className='input-ele' />  
                <input  type="text" placeholder='code confidentiel pour obtenir document' value={secret} onChange={(e) => setSecret(e.target.value) }  name='' required className='input-ele' />  
                <label className="custom-file-upload text-white back-btn">
                    <input type="file"  onChange={handleChange}/>
                    {value}
                </label>                
                <div className='btns'>
                    <input type="submit"  className="btn text-white back-btn btn-lg" value="Envoyer" />
                    <Link to="/HomePage" className='btn text-white back-btn btn-lg' >Back</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EgaliserDocument