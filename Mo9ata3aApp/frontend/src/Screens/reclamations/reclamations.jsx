import React, { useEffect, useState } from 'react'
import SideBar from '../../Components/sideBar/SideBar';
import axios from "axios";
import {Table } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { Zoom } from 'react-reveal';
import { format } from 'date-fns';



const Reclamations = () => {
    const [reclamations , setReclamation] = useState([]);
    const navigate = useNavigate();
    useEffect(() =>{
        // setReclamation(localStorage.getItem("reclamation"))
        const func  = async () => {
            const {data} = await axios.get("http://localhost:8082/AllReclamation");
            setReclamation(data);
            return ;
        }  
        func();
        return;
    },[]);

    console.log(reclamations);
   
    const handleUpdateReclamation = async (id) => {
        console.log(id);
        const {data} = await axios.post("http://localhost:8082/updateReclamationState/"+id , {
            State : "READ"
        })
        setReclamation(data);
        console.log(data);
        return navigate("/reclamations");
    }
    
  return (
    <div  className='contenaire-1'>
        <SideBar />
        { reclamations === null ? (
            <div className='alert alert-info'> 
                No reclamations until now 
            </div>
        ) : (

<div className='w-75 float-end container mt-5'>

                        <Table variant='dark' stripped bordered > 
                <Zoom cascade bottom>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>title</th>
                                    <th>Contenu</th>
                                    <th>SubmissionDate</th>
                                    <th>State</th>
                                    <th>mark as read</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reclamations.map(rec => {
                                        return (
                                            <tr>
                                                <td>{rec.id}</td>
                                                <td>{rec.title}</td>
                                                <td>{rec.contenu}</td>
                                                <td>{
                                                    format(new Date(rec.submissionDate), 'yy-MM-dd')
                                                    
                                                }</td>
                                                <td>{rec.state}</td>
                                                {rec.state === "pending" ?  (
                                                    <td   onClick={() => handleUpdateReclamation(rec.id)}>
                                                    <button className='btn btn-primary back-btn'>
                                                        Mark 
                                                    </button>
                                                    </td>
                                                ): (
                                                    <td   >
                                                    <button className='btn btn-primary back-btn' disabled>
                                                        Readed 
                                                    </button>
                                                    </td>
                                                )}
                                            </tr>                        
                                        )
                                    })
                                }
                            </tbody>

                </Zoom>
                </Table>
            </div>
        )}

    </div>
  )
}

export default Reclamations;