import { useState } from 'react';
import axios from 'axios';
import './UserRegister.css';
import { UserFormRegister } from '../../components/users/UserFormRegister';
const url = "http://localhost:3000/users";

export function UserRegister() {

  type User = {
    name: string;
    username: string;
    password: string;
    psw_repeat: string;
  }

  const [user, setUsers] = useState({
    name: "",
    username: "centroserra@gmail.com",
    password: "123",
    psw_repeat: "123"
  });

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setUsers(values => ({ ...values, [name]: value }))
  }

  function valFields(user: User) {
    let msg = ''
    if (user.name == '') { msg += '- Digite o seu Nome Completo !! -\n' };
    if (user.username == '') { msg += '- Digite um email válido !! -\n' };
    if (user.password == '') { msg += "- Digite sua Senha !! -\n" };
    if (user.psw_repeat == '') { msg += "- confirme sua Senha !! -\n" };
    if (msg != '') {
      alert(msg);
      return false;
    };
    return true;
  };

  function handleUser() {
    axios.post(url, user)
      .then(response => {
        //response.data
      }).catch(error => console.log(error));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (user.name && user.username && user.password && user.psw_repeat != "") {
      // handleUser()
      alert(user.username)
    } else {
      valFields(user)
    }
  }

  return (
    <>
      <UserFormRegister
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      >
        {user}
      </UserFormRegister>

      <br></br>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.password}</p>
      <p>{user.psw_repeat}</p>
    </>
  );
};