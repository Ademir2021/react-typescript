import { useState, useEffect } from "react";
import axios from 'axios';
const url = "http://localhost:3000/users";

export function SetUsers() {

  const [users, setUser] = useState([]);

  const getUser = async () => {
    try {
   const response = await  axios.get(url)
   const users = response.data
   setUser(users)
   console.log(users)
  }catch(error) {
        console.log("ops! ocorreu um erro");
      }
  }

  useEffect(()=>{
    getUser()
  }, []);

  return(
    <>
  <div>Últimos Users</div>
  {users.length === 0 ? <p>Carregando...</p> :(
    users.map((user: any)=>(
      <ul key={user.id}>
      <li>{user.id}</li>
      <li>{user.created_at}</li>
      <li>{user.name}</li>
      <li>{user.username}</li>
      <li>{user.password}</li>
      <li>22</li>
      </ul>
      )))}
    </>
  )
}