import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import Logo from '../components/Logo';

function Landing() {
  const { user } = useAppContext();
  return (
    <>
      {user && <Navigate to='/' />}
      
      <Wrapper>
        <nav>
          {/* <Logo /> */}
        </nav>
        <div className="container page">

          <div className="info">
            <h1>Job <span>Tracking</span> App</h1>
            <h4>Track and manage all your job applications in one place.</h4>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>

          <img src={main} alt="job hunt" className='img main-img'></img>

        </div>
      </Wrapper>
    </>
  );
}

export default Landing 