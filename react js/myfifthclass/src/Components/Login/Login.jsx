import React from 'react'

const Login = ({clickFunc}) => {
  return (
    <div>
      <h1>Login Form</h1>
      <a href="#" onClick={clickFunc}>Create an account</a>
    </div>
  )
}

export default Login
