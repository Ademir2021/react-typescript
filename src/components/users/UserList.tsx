import './UserList.css'

export function ListUSers(props:any){

    return (
    <>
    <ul>
    <li className='id'><b>ID_User: </b>{props.id}</li>
    <li className='create'><b>Criado em:</b> {props.create}</li>
    <li className='name'><b>Nome Completo:</b> {props.name}</li>
    <li className='username'><b>E-mail:</b> {props.username}</li>
    <li className='password'><b>Senha</b>: {props.password}</li>
    </ul>
    </>
    )
}