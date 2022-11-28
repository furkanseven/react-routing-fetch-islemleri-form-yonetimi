import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';


function Menu() {

    const navigate=useNavigate()

  return (
    <div>   
        <ul className='menu'>
            <a href='#/'><li onClick={()=>navigate(-1)}>Geri</li></a>
            <li><Link to ='/'>Anasayfa</Link></li>
            <li><Link to ='users'>Kullanıcılar</Link></li>
            <li><Link to='contact'>İletişim</Link></li>
            <li><Link to='auth'>Giriş Yap</Link></li>
        </ul>
    </div>
  )
}

export default Menu