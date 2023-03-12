import { useState, useEffect, useMemo } from "react";
import axios from 'axios';
import { ListProducts } from "../../../components/products/listProducts";
import { json } from "stream/consumers";
const url = "http://localhost:3000/products";

export function SalesForm(){

    const [products, setProducts] = useState([{item:"", quant:0}])
    const getProducts = async () =>{
        try {
    const response = await axios.get(url)
    const products = response.data
    setProducts(products)
        } catch (error) {
            console.log(error, "an error has occurred")
        }
    }
    useEffect(()=>{
        getProducts()
    }, [])

    const [sale, setSale] = useState ([{name:1, desc_val:2.30}])
    console.log(sale)

    function handleSales () {
        axios.post(url, )
        .then(response =>{
            //response.data
          }).catch(error => console.log(error));
        }

    const [itens, setItem] = useState({item:"", quant:0});
    
    function getItem(){
        { products.map( (number:any) =>{
            if(itens.item == number.descric_product ||
                itens.item == number.id_product ||
                itens.item == number.bar_code){
                const newItem:any = {}
                const itens:any = []
                newItem.item = number.descric_product
                newItem.quant = itens.quant
                itens.push(newItem)
                setSale(itens)
            }})}
        }
        useEffect(()=>{
            getItem()
        }, [])
    
      const handleChange = (event:any) => {
      const name = event.target.name;
      const value = event.target.value;
        setItem(values => ({...values, [name]: value}))
    }
     const handleSubmit = (event:any) => {
        event.preventDefault();
          //handleSales()
        getItem()
        }

    return(
        <>
    <fieldset>
        <legend>Lançar Vendas :</legend>
        <form onSubmit={handleSubmit}>
      <label>Item
      <datalist id="itens">
    <option id="item" value = {(products.map((val:any)=>(val.descric_product)))}></option>
      </datalist>
      <input
        type="search"
        list="itens"
        id="item"
        required placeholder="Buscar item" 
        name="item" 
        value={itens.item || ""} 
        onChange={handleChange}
      />
      </label><br></br>
      <label>Quantidade :
        <input 
          type="number" 
          name="quant" 
          value={itens.quant || ""} 
          onChange={handleChange}
        />
        </label><br></br>
        <input className='submit' type="submit" value="lancar !!" />
    </form>

    <div>
        <p>Item: {itens.item}</p>
        <p>Quant: {itens.quant}</p>
    </div>
    </fieldset>
    <div>{sale[0].name}</div>
        <div>Lista de Produtos</div>
        {products.length === 0 ? <p>Carregando...</p> :(
            products.map((product:any)=>(
                <ListProducts
                key = {product.id_product}
                id = {product.id_product}
                create = {product.created_at}
                name = {product.descric_product}
                val_max = {product.val_max_product}
                val_min = {product.val_min_product}
                brand = {product.fk_brand}
                sector = {product.fk_sector}
                bar_code = {product.bar_code}
                />
            )))}
        </>
    )
}