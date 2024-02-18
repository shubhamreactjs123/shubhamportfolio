import React, { useEffect, useState } from 'react'
import Register from './infoandauth/register'
import Login from './infoandauth/login'
import { Outlet, useNavigate } from 'react-router-dom'

const Experiments = () => {
  const [activeScreen, setActiveScreen] = useState('login')
  // const navigate = useNavigate();
  const pathName = window.location.pathname;
  console.log(pathName)
  useEffect(() => {
    if (localStorage.getItem('portfolioToken')) {
      // navigate('/home/experiments')
      setActiveScreen("profile")
    } else {
      // navigate('/home/experiments/profile')
      setActiveScreen("login")
    }
  }, [])
  return (
    <div className='experiments-main-page'>
          <div className='experiments-innner'>
            {activeScreen === 'register' && <Register setActiveScreen={setActiveScreen} />}
            {activeScreen === 'login' && <Login setActiveScreen={setActiveScreen} />}
          </div> 

    </div>
  )
}

export default Experiments
