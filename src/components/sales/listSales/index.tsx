import './index.css'

export function ListSales(props:any){

    return (
    <>
    <ul>
    <li className='id'><b>ID_Venda: </b>{props.id}</li>
    <li className='create'><b>Data Venda:</b> {props.create}</li>
    <li className='name'><b>Cliente:</b> {props.name}</li>
    <li className='total_prod'><b>Total dos Produtos:</b> {props.total_prod}</li>
    <li className='disc_sale'><b>Desconto</b>: {props.disc_sale}</li>
    <li className='total_not'><b>Total Nota</b>: {props.total_note}</li>
    </ul>
    </>
    )
}