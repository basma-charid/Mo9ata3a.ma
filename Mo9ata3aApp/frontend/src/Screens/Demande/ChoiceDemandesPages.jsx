/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./ChoiceDemande.css";
import { Link } from 'react-router-dom';
import { Zoom } from 'react-reveal';



const ChoiceDemandesPages = () => {
  return (
    <div className='contenaire w-100'>
        <Navbar/>
        <div className='holder-1'>
          <Zoom bottom>
              <div className='artisan demand-box d-flex flex-column justify-content-center align-items-center'>
                  <img src='download.png' alt='image src' className='img-service' />
                  <h1 className='mt-3 text-white fs-5'>Egaliser un Document </h1>
                  <Link to="/egaliserDocument" className='btn btn-lg text-white  back-btn'>Egaliser</Link>
              </div>
              <div className='artisan demand-box d-flex flex-column justify-content-center align-items-center'>
                  <img src='demande.jpg' alt='image src' className='img-service'/>
                  <h1 className='mt-3 text-white fs-5'>Obtenir document égalisé </h1>
                  <Link to="/ObtenirEgalise" className='btn btn-lg text-white  back-btn'>Obtenir</Link>
              </div>
              <div className='artisan demand-box d-flex flex-column justify-content-center align-items-center'>
                  <img src='tan.jpeg' alt='image src' className='img-service'/>
                  <h1 className='mt-3 text-white fs-5'>Demander un Document </h1>
                  <Link to="/demandeDocument" className='btn btn-lg text-white  back-btn'>Demander</Link>
              </div>
              <div className='artisan demand-box d-flex flex-column justify-content-center align-items-center'>
                  <img src='signature.jpeg' alt='image src' className='img-service'/>
                  <h1 className='mt-3 text-white fs-5'>Obtenir Document demandé</h1>
                  <Link to="/ObtenirDocument" className='btn btn-lg text-white  back-btn '>Obtenir</Link>
              </div>
          </Zoom>
        </div>
    </div>
  )
}

export default ChoiceDemandesPages