import React from 'react'
import classes from './login.module.css'

const login = () => {
  return (
    <div>
        <h1>Login Page</h1>
        <button className='global-btn'> Login Button</button>
        <button className={classes.loginBtn}>Local Login Button</button>
    </div>
    
  )
};

export default login;