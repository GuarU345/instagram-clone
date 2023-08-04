import React from 'react'
import AuthProvider from '../components/contexts/AuthContext'
import Login from '../components/user/Login'

function Signin() {
  return (
    <AuthProvider>
        <Login/>
    </AuthProvider>
  )
}

export default Signin