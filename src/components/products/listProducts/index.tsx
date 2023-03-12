import './index.css'

export function ListProducts(props:any){

    return (
    <>
    <ul>
    <li className='id'><b>ID_Produto: </b>{props.id}</li>
    <li className='create'><b>Data Cadastro:</b> {props.create}</li>
    <li className='name'><b>Descrição:</b> {props.name}</li>
    <li className='val_max'><b>Valor Max:</b> {props.val_max}</li>
    <li className='val_min'><b>Valor Min</b>: {props.val_min}</li>
    <li className='brand'><b>Marca</b>: {props.brand}</li>
    <li className='sector'><b>Setor</b>: {props.sector}</li>
    <li className='bar_code'><b>Barras</b>: {props.bar_code}</li>
    </ul>
    </>
    )
}