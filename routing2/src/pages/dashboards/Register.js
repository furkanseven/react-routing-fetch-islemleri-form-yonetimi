import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'

function Register() {
  return (
        <div className='login-card-container'>
        <div className='login-card'>
            <div className='login-card-header'>
                <h1>Kayıt Ol</h1>
            </div>
                <form className='login-card-form'>
                    <div className='form-item'>
                        <input type="text" name="mail" id="mail" placeholder="E-Mail" required autofocus/>
                    </div>
                    <div className='form-item'>
                        <input type="password" name="password" id="password"  placeholder="Şifreniz" required/>
                    </div>

                    <button type="submit">Kayıt Ol</button>
                    <div className='login-card-footer'>
                    <Link to='/auth'>Giriş Yapın</Link>
                </div>
                </form>

        </div>
    </div>
  )
}

export default Register