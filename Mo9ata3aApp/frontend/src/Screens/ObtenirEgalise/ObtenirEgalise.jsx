import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import {Table} from "react-bootstrap";
import axios from "axios";

const ObtenirEgalise = () => {
    const [code , setCode] = useState();
    const [state , setState] = useState(false);
    const [doc , setDocument] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data} = await axios.get("http://localhost:8082/getDocumentBySlug/"+code);
        setDocument(data);
        setState(true);
        console.log(doc);
    }
    const handleChange = (e) =>  {
        setCode(e.target.value);
    }
    const handleClick = (doc) => {
        const byteCharacters = atob(doc.base64ImageData);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += 512) {
          const slice = byteCharacters.slice(offset, offset + 512);
          const byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          byteArrays.push(byteArray);
        }
        const blob = new Blob(byteArrays, { type: 'image/jpeg' });
    
        // Create a download link
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `document_${doc.id}.jpg`;
    
        // Trigger download
        document.body.appendChild(link);
        link.click();
    
        // Clean up
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    }
    if(state) {
        return (
            <div className='contenaire w-100'>
              <Navbar/>
                <div className='holder container'>
                    <Table className='' bordered hover variant='dark'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>user_name</th>
                            <th>status</th>
                            <th>Document</th>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr>    
                            <td>#</td>
                            <td>{doc.user.fullName}</td>
                            <td >
                            <button className='btn text-white back-btn btn-md'>
                                {doc.state}
                            </button>
                            </td>
                            {
                                doc.state === "pending" ? (
                                    <td>
                                        <button className='btn text-white back-btn' disabled onClick={() => handleClick(doc)}>ce document nest pas encore egalisé</button>
                                    </td>
                                ) : (
                                    <td>
                                        <button className='btn text-white back-btn ' onClick={() => handleClick(doc)}>Download</button>
                                    </td>
                                )
                            }
                            

                        </tr>

                    </tbody>
                    </Table>

                </div>
            </div>
        )
    }else {
        return (
          <div className='contenaire w-100'>
              <Navbar/>
              <div className='holder'>
                  <form className='' onSubmit={handleSubmit} >
                      <h2 className='title-white fs-4'>Obtenier Document Egalisé </h2>
                      <input  type="text" placeholder='Code Confidentiel' value={code} onChange={handleChange }  name='' required className='input-ele' />                              
                      <div className='btns'>
                          <input type="submit"  className="btn text-white back-btn  btn-lg" value="Obtenir" />
                          <Link to="/HomePage" className='btn  text-white back-btn btn-lg' >Back</Link>
                      </div>
                  </form>
              </div>
          </div>
        )
    }


}

export default ObtenirEgalise