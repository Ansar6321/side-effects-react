import React from 'react'
import AuthService from '../../../services/AuthService'

const HomePage = () => {
  const handleLogOut = event => {
    /** @type {AuthService} */
    const authService = AuthService.getInstance();

    authService.logOut();
  }

  return (
    <div>
      HomePage
      <button onClick={handleLogOut}>Log out!!!</button>
    </div>  
  )
}

export default HomePage