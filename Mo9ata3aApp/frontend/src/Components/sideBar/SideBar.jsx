import React from 'react'
import { Zoom } from 'react-reveal';
import { Link ,useNavigate} from 'react-router-dom'



const SideBar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.setItem("admin" , null);
        localStorage.removeItem("admin");
        navigate("/");
    }
  return (
   
        <div className='side-bar'>
            
            <div className='h-100 d-flex flex-column justify-content-center align-items-start '>
                <Zoom left >

                    <div className='classias p-1 w-75 rounded-2 m-2 d-flex flex-direction-row justify-content-start align-items-center'>
                    <i class="fa-solid fa-gauge  text-white fs-3 m-3 "></i>
                        <Link to="/AreaHomePage" className='text-decoration-none text-white fs-5'>DashBoard</Link>
                    </div>
                    <div className='classias p-1 w-75   rounded-2 m-2 d-flex flex-direction-row justify-content-start align-items-center'>
                    <i class="fa-solid fa-user text-white  fs-3 m-3"></i>
                        <Link to="/admin/Clients" className='text-decoration-none text-white fs-5'>Clients</Link>
                    </div>

                    <div className='classias p-0 w-75  rounded-2 m-2 d-flex flex-direction-row justify-content-start align-items-center'>
                        <i class="fa-solid fa-file text-white fs-3 m-3"></i>
                        <Link to="/admin/Demande" className='text-decoration-none text-white fs-5'>Demandes</Link>
                    </div>
                    <div className='classias p-0 w-75 rounded-2 m-2 d-flex flex-direction-row justify-content-start align-items-center'>
                        <i class="fa-solid fa-file text-white  fs-3 m-3"></i>
                        <Link to="/admin/Document" className='text-decoration-none text-white fs-5'>Documents</Link>
                    </div>
                    <div className='classias p-0 w-75 rounded-2 m-2 d-flex flex-direction-row justify-content-start align-items-center'>
                        <i class="fa-solid fa-file text-white  fs-3 m-3"></i>
                        <Link to="/reclamations" className='text-decoration-none text-white fs-5'>Reclamations</Link>
                    </div>
                    <div className='classias p-0 w-75 rounded-2 m-2 d-flex flex-direction-row justify-content-start align-items-center'>
                        <i class="fa-solid fa-file text-white  fs-3 m-3"></i>
                        <Link to="/Services" className='text-decoration-none text-white fs-5'>Services</Link>
                    </div>
                    <div className='classias p-0 w-75 rounded-2 m-2 d-flex flex-direction-row justify-content-start align-items-center'>
                        <i class="fa-solid fa-file text-white  fs-3 m-3"></i>
                        <Link to="/admin/profile" onClick={handleLogout} className='text-decoration-none text-white fs-5'>Profile</Link>
                    </div>
                    <div className='classias p-0  w-75 rounded-2 m-2 d-flex flex-direction-row justify-content-start align-items-center'>
                        <i class="fa-solid fa-file text-white  fs-3 m-3"></i>
                        <Link to="/" onClick={handleLogout} className='text-decoration-none text-white fs-5'>LogOut</Link>
                    </div>
                </Zoom>
            </div>
        
    </div>
  )
}

export default SideBar