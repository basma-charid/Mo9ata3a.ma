import React, { useEffect, useState } from 'react'
import {Container ,Alert} from "react-bootstrap";
import Navbar from '../../Components/Navbar/Navbar';
import {Link, useNavigate} from "react-router-dom";
import "./ClientHomePage.css";
import {toast , Toaster} from "sonner";

const ClientHomePage = () => {
  const [auth , setAuth ] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();
  useEffect(() => {
    toast.success("hi mr "+auth.fullName+" Contact us if u get stack ! ");
  });


  if(auth == null) {
    navigate("/login");
  }else  if(auth.role === "FONCTIONNAIRE") {

  }else {
      return (
        <div className='contenaire'>
          <Navbar/>
          <Toaster />
          <Container className='d-flex flex-column justify-content-center align-items-center'>
              <Alert variant='dark' className='text-center bg-dark text-white w-50 rounded mt-3 text-center'>
                <Alert.Heading>Hi Client M. {auth.fullName.toUpperCase()} </Alert.Heading>
              </Alert>
              <Container className=' h-75 d-flex flex-direction-row justify-content-center align-items-center flex-wrap'>
                <div className='m-3 area d-flex flex-direction-column justify-content-center align-items-center'>
                     <i  className="fa-solid fa-user auth"></i>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                      <h2 className=' mt-3 fs-4 text-white '>Faire Une demande ?</h2>
                      <Link className='btn btn-lg text-white  back-btn' to="/userdemandes">Faire</Link>
                    </div>
                </div>

                <div className=' m-3 area d-flex flex-direction-column justify-content-center align-items-center'>
                    <i  className="fa-solid fa-user auth"></i>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                      <h2 className=' mt-3 fs-4 text-white '>Faire Une Reclamation ?</h2>
                      <Link className='btn btn-lg  text-white  back-btn' to="/auth/addReclamation">Faire</Link>
                    </div>
                </div>

              </Container>
          </Container>
        </div>
      )
  }

}

export default ClientHomePage