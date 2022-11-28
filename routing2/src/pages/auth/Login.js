import React from 'react';
import { Link } from 'react-router-dom';



function Login() {
  return (
<div class="login-card-container">
        <div class="login-card">
            <div class="login-card-header">
                <h1>Giriş Yap</h1>
                <div>Lütfen Mail Adresiniz ve Şifreniz İle Giriş Yapın</div>
            </div>
                <form class="login-card-form">
                    <div class="form-item">
                        
                        <input type="text" name="mail" id="mail" placeholder="E-Mail" required autofocus/>
                    </div>
                    <div class="form-item">
                        
                        <input type="password" name="password" id="password"  placeholder="Şifreniz" required/>
                    </div>
                    <div class="form-item-other">
                        <div class="checkbox">
                            <input type="checkbox" name="checkbox" id="rememberMeCheckbox"/>
                            <label for="rememberMeCheckbox">Beni Hatırla</label>
                        </div>
                    </div>
                    <button type="submit">Giriş Yap</button>
                </form>
                <div class="login-card-footer">
                    Hesabınız yok mu ? <Link to='/auth/register'>Ücretsiz Hesap Oluşturun</Link>
                </div>
        </div>
    </div>
  )
}

export default Login