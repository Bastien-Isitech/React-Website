import React, { useState, useEffect } from 'react';
import '../../App.css';
import * as fromUserAPI from '../../api/users'



export default function Products() {

  const [users, setUsers] = useState([]);


  const getUsers = async () => {
    setUsers([])
    const Users = await fromUserAPI.getUsers()
    Users.map(user => {
      setUsers(users => users.concat(user))
    })
  }

  useEffect(async () => {
    getUsers()
  }, [])
  return (
    <>
      <h3 className='div1'>Les actualités publiées par les auditeurs</h3><br></br>
      {users.map(user => {
        return (
          <div className="div1">{user.title}
            <div className="div2">{user.contenu}<br></br>situé en : {user.pays}</div><br></br>
          </div>
        )
      })}
    </>
  )
}