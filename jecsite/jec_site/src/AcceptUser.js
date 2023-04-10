import RegisterUser from './RegisterUser';
const AcceptUser = ({userTrue, submitted}) => {
    
    return(
        <div>
        {userTrue && <p>Login Accepted</p>}
        {!userTrue && submitted && <section>User name and Password mismatched
        <RegisterUser/></section>}
        </div>  
    )

}

export default AcceptUser;