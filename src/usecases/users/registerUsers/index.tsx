import { useState } from 'react';
import '../index.css'
import axios from 'axios';
const url = "http://localhost:3000/users";

export function UserForm() {
  
  type User = {
    name:string;
    username:string;
    password:string;
  }

  const [user, setUsers] = useState({
    name:"",
    username:"",
    password:""});

  const handleChange = (event:any) => {
  const name = event.target.name;
  const value = event.target.value;
    setUsers(values => ({...values, [name]: value}))
  }

  function valFields(user:User){
    let msg = ''
    if(user.name == ''){msg += '- Digite o seu Nome Completo !! -\n'};
    if(user.username == ''){msg += '- Digite um email válido !! -\n'};
    if(user.password == ''){msg += "- Digite sua Senha !! -\n"};
    if(msg != ''){
        alert(msg);
        return false;
    };
        return true;
};

  function handleUser () {
    axios.post(url, user)
    .then(response =>{
        //response.data
      }).catch(error => console.log(error));
    };
    
  const handleSubmit = (event:any) => {
  event.preventDefault();
  if(user.name && user.username && user.password != ""){
    handleUser()
}else{
  valFields(user)}
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

