import { Button } from './UserButton';
import { Header } from './UserHeader';

export function UserFormLogin({ children, handleChange, handleSubmit }: any) {
    return (
        <>
            <img src="/favicon.ico" alt='Logo' />
            <main>
                <fieldset>
                    <Header name="Login User" />
                    <form onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="username"
                            placeholder='Email'
                            value={children.username || ""}
                            onChange={handleChange}
                        />
                        <label>Senha</label>
                        <input
                            type="password"
                            name="password"
                            placeholder='Senha'
                            value={children.password || ""}
                            onChange={handleChange}
                        />
                        <Button>Enviar</Button>
                        <h4><a href='http://localhost:3001/register'>
                            Cadastre se</a></h4>
                    </form>
                </fieldset>
            </main>
        </>
    )
}