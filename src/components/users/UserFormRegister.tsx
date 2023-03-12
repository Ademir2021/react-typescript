import { Button } from './UserButton';
import { Header } from './UserHeader';

export function UserFormRegister({ children, handleChange, handleSubmit }: any) {
    return (
        <>
            <img src="/favicon.ico" alt='Logo' />
            <main>
                <fieldset>
                    <Header name="Register User" />
                    <form onSubmit={handleSubmit}>
                        <label>Nome completo</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Usuário'
                            value={children.name || ""}
                            onChange={handleChange}
                        />
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
                        <label>Repita senha</label>
                        <input
                            type="password"
                            name="psw_repeat"
                            placeholder='Repita senha'
                            value={children.psw_repeat || ""}
                            onChange={handleChange}
                        />
                        <Button>Enviar</Button>
                        <h4><a href='http://localhost:3001/login'>
                            Sign in</a></h4>
                    </form>
                </fieldset>
            </main>
        </>
    )
}