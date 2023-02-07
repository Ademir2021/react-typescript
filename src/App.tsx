import './App.css';
import { UserForm } from './usecases/users/registerUsers/index';
import { SetUsers } from './usecases/users/listUSers/index';


function App() {
//Code...

  return (
    <div>
      <UserForm/>
      <SetUsers/>
    </div>
  )
}

export default App;
