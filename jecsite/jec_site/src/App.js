import LoginForm from './Login_form';
import { useState,useEffect } from 'react';
import AcceptUser from './AcceptUser';


function App() {

  const API_URL = "http://localhost:3501/users";
  const [userName,setUserName] = useState(null);
  const [passwd,setPasswd] = useState('');
  const [users,setUsers] = useState('');
  const [fetchErr,setFetchErr] = useState(null);
  const [userTrue, setUserTrue] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  

  const handleSubmit =(e) =>{
    e.preventDefault();
    if(userName) {users.map((user)=>(
    user.userName===userName && passwd===user.passwd ? setUserTrue(true) : setUserTrue(false)
    ))}
    setSubmitted(true);

  }

  useEffect(() => {
    const fetchUsers  = async() => {
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error("Error 404..");
        const registeredUsers = await response.json();
        setUsers(registeredUsers);
      } catch (err) { 
        setFetchErr(err.message);
      }finally {
        setSubmitted(false);
      }

    }

    fetchUsers();
},[])

  return (
    <div className="App">
      <LoginForm
      userName = {userName}
      setUserName = {setUserName}
      passwd = {passwd}
      setPasswd = {setPasswd}
      handleSubmit = {handleSubmit}
      />
    {fetchErr && <p>{`Error: ${fetchErr}`}</p>}
      {!fetchErr &&
      <AcceptUser
      userTrue = {userTrue}
      submitted = {submitted}
      />}
    </div>
  );
}

export default App;
