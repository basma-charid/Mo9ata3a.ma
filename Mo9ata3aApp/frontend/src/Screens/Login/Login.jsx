import * as React from 'react';
import "./Login.style.css";
import {Link} from "react-router-dom";
import {Fade} from "react-reveal"
import {toast ,Toaster} from "sonner"

const Login = () => {
    React.useEffect(() => {
        toast.success("Login to do operations !! ")
    },[toast]);

  return (
    <div className='contenaire-1'>
        
        {/* <Navbar /> */}
      {/* <Toaster /> */}


        <Fade cascade bottom>
        <div className='container-3'>
            <div className='box-bolder'>
                    <div className='d-flex flex-direction-row justify-content-center align-items-center'>
                        <i className="fa-solid fa-user auth"></i>
                        <h2>Admin</h2>
                    </div>
                <div className='btns'>
                    <Link className='btn btn-3 back-btn text-white btn-lg' to="/LoginAdmin" >Login</Link>
                </div>
            </div>
           
                <div className='box-bolder'>
                    <div className='d-flex flex-direction-row justify-content-center align-items-center'>
                        <i  className="fa-solid fa-user auth"></i>
                        <h2>Client</h2>
                    </div>
                    <div className='btns'>
                        <Link className='btn btn-3  back-btn text-white btn-lg' to="/LoginClient" >Login</Link>
                        <Link className='btn btn-3  back-btn text-white btn-lg' to="/SignUpClient" >SignUp </Link>
                        <Link className='btn btn-3  back-btn text-white btn-lg' to="/TrackDemand">Track you demand </Link>
                    </div>
                </div>
        </div>
        </Fade>
    </div>
  )
}

export default Login