import './App.css';
import AddUserForm from './components/signInForm/AddUserForm';
import UserList from './components/userList/UserList';
import Header from './components/Header/Header';
import CustomRouting from './CustomRouting';
import { useSelector } from "react-redux";



function App() {
  const urlRoute = useSelector((state) => state.store.route);
  return (
    <CustomRouting>
      <div className="App">
        <Header />
        {
         urlRoute==='/All_users'?<UserList />: <AddUserForm />
        }
      </div>
    </CustomRouting>
  );
}

export default App;
