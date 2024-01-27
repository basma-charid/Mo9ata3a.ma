import { Link } from "react-router-dom";
import "./Navbar.style.css";
import { Fade } from "react-reveal";
import React, { useEffect, useState } from "react";
import {useNavigate ,Navigate} from "react-router-dom"

const Navbar = () => {
  const [user , setUser] =  useState(JSON.parse(localStorage.getItem("user")));
  const [publicFragement , setFragement] = useState(null);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate("/");
    window.location.replace("/");
    localStorage.setItem("user" , null);
    localStorage.removeItem("user");
    setUser(null);
  }
  

  return (
    <div className="flex-system padd">
        <Fade left cascade>
          <span className="logo text-white">Mo9ata3a.ma</span>
        </Fade>
        <Fade top cascade >
          {
            user === null ?  (
              <>
          <ul className="d-flex flex-direction-row text-white ">

              <li className="li-element"><Link to='/' className=" text-white item" >Home</Link></li>
              <li className="li-element"><Link to='#about' className=" text-white item" >About us </Link></li>
              <li className="li-element"><Link to='#contact' className=" text-white item" >Contact-us </Link></li>  
              <li className="li-element"><Link to='/login' className=" text-white item" >Connexion </Link></li>  
          </ul>
            </>
            ) : (
          <ul className="d-flex flex-direction-row text-white ">
            {
              user  === null ?  (
                <>
                  <li className="li-element"><Link to='/' className=" text-white item" >Home</Link></li>
                  <li className="li-element"><Link to='#' className=" text-white item" >About us </Link></li>
                  <li className="li-element"><Link to='#' className=" text-white item" >Contact-us </Link></li>  
                  
                </>
  
              ) : (
                <>
                <li className="li-element"><Link to='/user/profile' className=" text-white item" >Profile</Link></li>
                <li className="li-element"><Link to='/egaliserDocument' className=" text-white item" >Egaliser</Link></li>  
                <li className="li-element"><Link to='/ObtenirEgalise' className=" text-white item" >Demander</Link></li>  
                <li className="li-element"><Link to='/AllReclamations' className=" text-white item" >Mes Reclamations</Link></li>
                <li className="li-element"><Link to='#' className=" item btn text-white  back-btn btn-lg" onClick={handleLogout}>Logout</Link></li>
                {user == null && <Navigate to="/" />}
                </>
              ) 
 
            }
          </ul>
            )
          }
         
        </Fade>
    </div>
  )
}

export default Navbar