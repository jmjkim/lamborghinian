import { useContext, useState } from "react";
import { UserContext } from "../../context/user";
import { useNavigate, NavLink } from "react-router-dom";

const SignIn = () => {
    const { signIn } = useContext(UserContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [invalidError, setInvalidError] = useState("")
    const navigate = useNavigate()

    const handleSignInSubmit = (e) => {
        e.preventDefault()
        
        fetch("/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            // body: JSON.stringify({ username, password })
            body: JSON.stringify({ 
                username: username, 
                password: password 
            })
        })
        .then(r => r.json())
        .then(data => {
            if (!data.error) {
                signIn(data)
                navigate("/")
            } 
            else 
                setUsername("")
                setPassword("")
                setInvalidError(data.error)
        })
    }

    return (
        <div className="sign_form_container">
            <form onSubmit={handleSignInSubmit}>
                <h2>Sign In</h2>

                <label>Username</label>
                <input onChange={e => setUsername(e.target.value)} 
                       type="text"
                       value={username}   
                       maxLength={8} 
                       autoComplete="off"/>

                <label>Password</label>
                <input onChange={e => setPassword(e.target.value)} 
                       type="password"
                       value={password}   
                       maxLength={10} 
                       autoComplete="off"/>

                <div className="btn_container">
                    <NavLink to="/">Back to main</NavLink>
                    <button type="submit">Submit</button>
                </div>
                <br/>
                
                <div className="signin_invalid_error_container">
                    {invalidError ? <li>Incorrect username or password</li> : null}
                </div>
            </form>

        </div>
    )
}

export default SignIn