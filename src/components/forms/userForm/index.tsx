import { useState, useSyncExternalStore } from 'react';
//import ReactDOM from 'react-dom/client';
import '../../forms/index.css'
import axios from 'axios';
const url = "http://localhost:3000/users";

let user:any

export function UserForm() {
  const [user, setUsers] = useState({
    name:"Ademir Souza de Almeida",
    username:'centroserra@gmail.com',
    password:'123abc'});
    
  const handleChange = (event:any) => {
  const name = event.target.name;
  const value = event.target.value;
    setUsers(values => ({...values, [name]: value}))
  }

  function handleUser () {
    axios.post(url, user)
    .then(response =>{
        console.log(response.data)
      }).catch(error => console.log(error));
    };

  async function getUser(){
     await axios.get(url)
    .then(response =>{
       const users =  response.data
       //console.log(users)
       return users
    })
    .catch(error =>console.log(error))
};getUser()
  
  const handleSubmit = (event:any) => {
  event.preventDefault();
    handleUser()
  }

  return (
    <fieldset>
        <legend>Registro de Usuários :</legend>
        <form onSubmit={handleSubmit}>
      <label>Nome completo :
      <input
        type="text" 
        name="name" 
        value={user.name || ""} 
        onChange={handleChange}
      />
      </label><br></br>
      <label>Digite seu Email :
        <input 
          type="email" 
          name="username" 
          value={user.username || ""} 
          onChange={handleChange}
        />
        </label><br></br>
      <label>Digite sua senha : 
        <input 
          type="password" 
          name="password" 
          value={user.password || ""} 
          onChange={handleChange}
        />
        </label><br></br>
        <input className='submit' type="submit" value="Registrar Usuários !!" />
    </form>
    <div>
        <p>Seu Nome: {user.name}</p>
        <p>Seu Email: {user.username}</p>
        <p>Sua Senha: {user.password}</p>
    </div>
    </fieldset>
  )
}

