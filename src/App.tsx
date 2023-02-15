import './App.css';
import { UserForm } from './usecases/users/registerUsers/index';
import { SetUsers } from './usecases/users/listUSers/index';
import { SetSales } from './usecases/sales/listSales';


function App() {
//Code...

  return (
    <div>
      <UserForm/>
      <SetSales/>
    </div>
  )
}

export default App;
