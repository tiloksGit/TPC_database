import { FaCheck } from 'react-icons/fa';

const LoginForm = ({userName, setUserName, handleSubmit, passwd, setPasswd}) => {

    return(
        <main>
        <form className= "formItems" onSubmit={handleSubmit}>
            <label htmlFor="userName">Enter Username: </label>
            <input
            id="username"
            autoFocus
            className="username"
            placeholder="Username"
            onChange={(e)=> {setUserName(e.target.value)}}
            type="text"
             />
            <label htmlFor="passwd">Enter Password: </label>
            <input
            autoComplete= "0"
            type="password" 
            id="passwd"
            className="passwd"
            placeholder="Password"
            onChange={(e) => {setPasswd(e.target.value)}}
            />
            <button 
            type="submit"
            ><FaCheck/></button>
        </form>
        </main>
    )
}

export default LoginForm;