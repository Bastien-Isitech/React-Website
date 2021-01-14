import React, { useState, useEffect } from 'react';
import '../../App.css';
import * as fromUserAPI from '../../api/users'
import { useHistory } from "react-router-dom";

export default function Services() {


  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState('');
  const [contenu, setContenu] = useState('');
  const [pays, setPays] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.name == 'titre') {
      setTitle(e.target.value)
    }
    if (e.target.name == 'contenu') {
      setContenu(e.target.value)
    }
    if (e.target.name == 'pays') {
      setPays(e.target.value)
    }
  }

  const postUser = async () => {
    await fromUserAPI.postUser({ title: title, contenu: contenu, pays: pays })

    localStorage.setItem('users', JSON.stringify(users))
    history.push("/products")
  }

  return (
    <>
      <div className='div3'>
        <h2> Ajouter un atricle</h2>
        <p>Intitulé</p>
        <input type="text" name="titre" placeholder='Ecrivez ici' value={title} onChange={(e) => handleChange(e)} /><br></br>
        <p>Contenu</p>
        <input type="text" name="contenu" placeholder='Ecrivez ici' value={contenu} onChange={(e) => handleChange(e)} /><br></br>
        <p>Pays</p>
        <input type="text" placeholder='Ecrivez ici' name="pays" value={pays} onChange={(e) => handleChange(e)} /><br></br>
        <button onClick={() => postUser()}>Soumettre l'article</button>
      </div>
    </>
  )
}