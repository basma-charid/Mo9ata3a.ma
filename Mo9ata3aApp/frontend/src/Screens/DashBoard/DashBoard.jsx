import React, { useEffect, useState } from 'react'
import SideBar from '../../Components/sideBar/SideBar'
import axios from "axios";
import {Table} from "react-bootstrap";
import { Zoom } from 'react-reveal';

const Clients = () => {
    const [users , setUsers] = useState([]);
  
    useEffect(() => {
        const getApprouvedUsers = async () => {
            const {data} = await axios.get("http://localhost:8082/getAllAddedUsers");
            setUsers(data);
            return;
        }
        getApprouvedUsers();
        return ;
    },[axios]);
    
    const handleSubmit = async (id) => {
        console.log(id);
        await axios.post("http://localhost:8082/deleteClient/"+id);
        window.location.reload(true);
        return ;
    }

  return (
    
    <div className='d-flex flex-direction-row justify-content-end align-items-center'>
           <div className='side-1'>
                 <SideBar />
            </div>
           
            <div className='side-2'>
            <div className='sub-side-22 mt-5'>
                        <Table className='m-3 w-75 float-end' striped bordered hover variant='dark'>
                <Zoom cascade bottom>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Full Name</th>
                                <th>email</th>
                                <th>age</th>
                                <th>gender</th>
                                <th>ville</th>
                                <th>state</th>
                                <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => {
                                    return (
                                        <tr key={user.user_id}>
                                            <td>{user.user_id}</td>
                                            <td>{user.fullName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.age}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.ville}</td>
                                            <td>{user.state}</td>
                                            <td >
                                                <button className='btn text-white  back-btn btn-lg' onClick={() => handleSubmit(user.user_id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                </Zoom>
            </Table>
            </div>
            </div>
                
    </div>
  )
}

export default Clients