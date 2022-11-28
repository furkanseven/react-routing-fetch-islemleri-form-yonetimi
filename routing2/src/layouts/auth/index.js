import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

function AuthLayout() {
  return (
    <div>
    <strong>Auth Layout</strong> 
    <Link to='/'> Anasayfaya Dön</Link>
    <hr/>
    <Outlet/>


    </div>
  )
}

export default AuthLayout