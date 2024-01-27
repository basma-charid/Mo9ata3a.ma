import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import {toast , Toaster} from "sonner";
import {Table} from "react-bootstrap";


const TrackDemand = () => {
    const [email , setEmail] = useState();
    const [state , setState ] = useState();
    const [user , setUser] = useState(null);
    const handleClick = async (e) => {
        e.preventDefault();

        try {
            const {data} = await axios.get("http://localhost:8082/getUserFromWait/"+email);
            setUser(data);
            if(!data){
                toast.loading("the email doesnt exist on the system !");
            }
            console.log(data);
        } catch (error) {
            toast.loading("wrong data");
        }
    }

    if(user === null){
            return (
            <div className='holder'>
                <Toaster />
                <form className=''  onSubmit={handleClick}>
                        <h2 className='title-white'>Enter you data to track</h2>
                        <input  type="email" placeholder='Enter your email' onChange={e => setEmail(e.target.value)} value={email} name='' required className='input-ele' />  
                        <div className='btns'>
                            <input type="submit"  className="btn    back-btn text-white btn-lg" value="Login" />
                            <Link to="/SignUpClient" className='btn back-btn text-white  btn-lg' >Sign up </Link>
                        </div>
                </form>
            </div>
            )
    }else {
        return (
        <div className='holder'>
            <Toaster />
            <div className='container'>
                {user !== (null || '')  ?   (
            <>
            <h1 className='text-white text-center m-5'>keep track of your signup demand </h1>
                <Table striped variant="dark" bordered hover>    
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>fullName</th>
                            <th>email</th>
                            <th>state</th>
                            <th>phone</th>
                            <th>gender</th>
                            <th>ville</th>
                            <th>cin</th>
                        </tr>
                    </thead>
                    
                        <tbody>
                            <tr>
                                    <td>#</td>
                                    <td>{user.fullName}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className='btn back-btn text-white'>
                                            {user.state}
                                        </button>
                                    </td>
                                    <td>{user.phone}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.ville}</td>
                                    <td>{user.cin}</td>
                            </tr>
                        </tbody>
                </Table>
                <h1 className='text-white fs-4 text-center mt-5'>You cant login in the system until your demand been approuved !</h1>
                <Link to="/login" className='btn back-btn text-white fs-3 text-center'> back</Link>
                </>
                ): (
                    toast.error("error !!")
                )}
                </div>

        </div>
        )
    }
}

export default TrackDemand