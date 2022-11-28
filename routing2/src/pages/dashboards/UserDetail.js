import React, { useEffect, useState } from 'react'
import {useLocation, useParams,Link} from 'react-router-dom';

function UserDetail() {

    const location = useLocation()
    const [user,userDetail]=useState(location.state)

    const {id} = useParams()
   
    console.log(location);

    useEffect(()=>{
        if(!user?.id){
            //!user.id yoksa dedik yani kullanıcılar sayfasından değil linke doprudan geldiysek o zaman fetch et
            //ama user içinde bir obje olmadığı için null hatası aldık bu yüzden
            //user? diyerek user varsa ve altındada id varsa demiş olduk
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res=>res.json())
            .then(data=>userDetail(data))
        }
    },[id,user])

  return (
    <div>
        <h2>Kullanıcı Detay</h2>
        {//<pre>{JSON.stringify(location.state.user,null,2)}</pre> 
          user && <pre>{JSON.stringify(user,null,2)}</pre>
        }
           
        <Link to ={`/users/${Number(id)+1}`}>Sonraki Kullanıcı</Link>
    

    </div>
    
  )
}

export default UserDetail