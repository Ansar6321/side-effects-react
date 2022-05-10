import React from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/AuthService'
// import styles from './LoginPage.module.css';

const LoginPage = () => {
  const handleLogin = event => {
    /** @type {AuthService} */
    const authService = AuthService.getInstance();
    authService.login();
  }

  return (
    <div>
      LoginPage
      <button onClick={handleLogin}>Log IN!!!</button>
      <Link to='../register'>Go to Register</Link>
    </div>
  )
}

export default LoginPage