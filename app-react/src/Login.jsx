import { useState } from 'react';
import logo from "./assets/react.svg"
import axios from 'axios'
function Login (props) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const getLogin = (evt) => {setLogin(evt.target.value)}
    const getPassword = (evt) => {setPassword(evt.target.value)}


    const handleSubmit = () => {
        axios.post('http://127.0.0.1:5000', {
            login: login, 
            password: password
        })
        .then((response) =>{
            if(response.status == 200)
            {
                props.logIn({id : 0, username:login, photo : response.data.logo, registerDate : new Date("1999-05-28").toLocaleDateString(), is_admin : false})
            }
            else{
                console.log(response.message);
            }
        })
        .catch(err => {
            console.error(err);
        });
    };

    return (
    <div>
        <label htmlFor="login">Login</label><input id="login" onChange={getLogin}/>
        <label htmlFor="mdp">Mot de passe</label><input type="password" id="mdp" onChange={getPassword}/>
        <button type="submit" onClick={handleSubmit}>Log In</button><button type="reset">Annuler</button>
    </div>
    );
}

export default Login;