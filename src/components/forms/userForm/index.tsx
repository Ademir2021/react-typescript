import { useState } from 'react';
import '../../forms/index.css'
import axios from 'axios';
const url = "http://localhost:3000/users";

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
        //response.data
      }).catch(error => console.log(error));
    };
    
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
        <p></p>
    </div>
    </fieldset>
  )
}

