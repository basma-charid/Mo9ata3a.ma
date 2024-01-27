import React from 'react'
import { Link } from 'react-router-dom'
import  "./WaitList.css";
import { Zoom } from 'react-reveal';

const WaitList = () => {
  return (
    <div className='contenaire-1 container-12 '>
        <Zoom bottom cascade duration={1000}>
            <div className='waitlist'>
                <i class="fa-solid fa-check icona"></i>            
                <h2 className='text-white title-11'>you Are know in the waitList  </h2>
                <p className='petit'>You can track your sign up demand with your email</p>
                <Link  className='btn back-btn text-white btn-lg' to='/login'>retour</Link>
            </div>
        </Zoom>

    </div>
  )
}

export default WaitList