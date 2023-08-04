import React from 'react'
import AuthProvider from '../contexts/AuthContext'
import Login from '../components/user/Login'

function Signin() {
  return (
    <AuthProvider>
        <Login/>
    </AuthProvider>
  )
}

export default Signin