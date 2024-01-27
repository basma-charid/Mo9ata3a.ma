import React, { useState } from 'react'
import SideBar from '../../Components/sideBar/SideBar';

const Document = () => {
    const [users , setUsers] = useState(JSON.parse(localStorage.getItem("users")));
    
    console.log(users);


  return (
    
    <div className='contenaire-1 flex-system'>
            <SideBar />
           
            <div className='w-75 '>
                    {/* <Table className='m-3 w-75 float-end' striped bordered hover variant='dark'>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>email</th>
                            <th>age</th>
                            <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => {
                                return (
                                    <tr>
                                        <td>{user.user_id}</td>
                                        <td>{user.fullName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td >
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        
                        
                        </tbody>
                    </Table> */}
                <h1 className='text-center text-white'>No Document until know</h1>
            </div>
                
    </div>
  )
}

export default Document


