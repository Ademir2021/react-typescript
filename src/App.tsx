import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { UserRegister } from './usecases/users/UserRegister';
import { SetUsers } from './usecases/users/UserList';
import { UserLogin } from './usecases/users/UserLogin';

function App() {

  return (
    <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/listar">Listar</Link>
          </nav>
          <Routes>
            <Route path="/" Component={UserRegister} />
            <Route path="/login" Component={UserLogin} />
            <Route path="/register" Component={UserRegister} />
            <Route path="/listar" Component={SetUsers} />
          </Routes>
          </div>
          </Router>       
  )
}

export default App;
