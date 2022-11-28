import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Users() {

    const[users,setUsers] = useState([])

    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])



  return (
    <div>
        <h2>Kullanıcılar</h2>
        {
            users.map((user)=>
            <Link key={user.id} to={`${user.id}`} state={user}>
            <li key={user.id} >{user.name}</li>
            </Link>)
        }
        
    </div>
  )
}

export default Users