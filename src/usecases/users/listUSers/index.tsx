import { useState, useEffect } from "react";
import axios from 'axios';
import { ListUSers } from "../../../components/users/listUsers";
import { FormatDate } from "../../../components/utils/formatDate";
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
    <hr></hr>
    <div>Lista de Users : </div>
  {users.length === 0 ? <p>Carregando...</p> :(
    users.map((user: any)=>(
      <ListUSers
      key = { user.id}
      id = {user.id}
      create = {FormatDate(user.created_at)}
      name = {"Olá, seja bem vindo : " + user.name}
      username = {user.username}
      password = {user.password}
      />
      )))}
    </>
  )
}