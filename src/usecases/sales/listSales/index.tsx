import { useState, useEffect } from "react";
import axios from 'axios';
import { FormatDate } from "../../../components/utils/formatDate";
import { ListSales } from '../../../components/sales/listSales';
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
      <ListSales
      key = {sale.id_sale}
      id = {sale.id_sale}
      create = {FormatDate(sale.created_at)}
      name = {"Num.º : " + sale.fk_name_pers}
      total_prod = {sale.val_rec}
      disc_sale = {sale.disc_sale}
      total_note = {sale.total_sale}
      />
      )))}
    </>
  )
}