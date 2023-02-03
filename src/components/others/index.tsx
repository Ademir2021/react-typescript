import { useState, useEffect } from "react";
import axios from 'axios'
const url = "http://localhost:3000/users";

export function SetUsers() {

const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(url)
    .then(response => {
      const _users = response.data
      let users:any  = (_users)
      setUsers(users)
    })
  })

  return(
    <>
  <p>================================</p>
  <p>List: {users}</p>
  </>
  )
}