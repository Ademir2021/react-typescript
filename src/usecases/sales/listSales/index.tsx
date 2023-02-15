import { useState, useEffect } from "react";
import axios from 'axios';
import { ListUSers } from "../../../components/users/listUsers";
import { FormatDate } from "../../../components/utils/formatDate";
const url = "http://192.168.1.9:3000/sales";

export function SetSales() {
  const [sales, setSales] = useState([]);
  const getUser = async () => {
    try {
  const response = await  axios.get(url)
  const sales = response.data
   setSales(sales)
   console.log(sales)
  }catch(error) {
        console.log("ops! ocorreu um erro");
      }
    }

  useEffect(()=>{
    getUser()
  }, []);

  return(
    <>
    <div style={{padding:'12px'}} >Lista de Vendas !! </div>
  {sales.length === 0 ? <p>Carregando...</p> :(
    sales.map((sale: any)=>(
      <ListUSers
      key = { sale.id}
      id = {sale.id_sale}
      create = {FormatDate(sale.created_at)}
      name = {"Olá, seja bem vindo : " + sale.fk_name_pers}
      username = {sale.val_rec}
      password = {sale.total_sale}
      />
      )))}
    </>
  )
}