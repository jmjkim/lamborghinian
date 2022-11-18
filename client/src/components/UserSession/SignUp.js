import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [invalidErrors, setInvalidErrors] = useState([])

  const handleSignUpSubmit = (e) => {
    e.preventDefault()

    fetch("/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username, 
      password, 
      password_confirmation: passwordConfirmation
    })
  })
  .then(r => r.json())
  .then(data => {
    if (!data.error) {
      alert("User created!")
      navigate("/")
    }

    else 
      setUsername("")
      setPassword("")
      setPasswordConfirmation("")
      setInvalidErrors(data.error)
  })
}

  return (
    <div className="sign_form_container">
        <form onSubmit={handleSignUpSubmit}>
          <h2>Create New Account</h2>

          <label>Username</label>
          <input type="text" 
                 id="username" 
                 value={username} 
                 onChange={e => setUsername(e.target.value)} 
                 maxLength={8} 
                 autoComplete="off"/>

          <label>Password</label>
          <input type="password" 
                 id="password" 
                 value={password} 
                 onChange={e => setPassword(e.target.value)} 
                 minLength={6} 
                 maxLength={10} 
                 autoComplete="off"/>

          <label>Confirm Password</label>
          <input type="password" 
                 id="password_confirmation" 
                 value={passwordConfirmation} 
                 onChange={e => setPasswordConfirmation(e.target.value)} 
                 minLength={6} 
                 maxLength={10} 
                 autoComplete="off"/>

          <div className="btn_container">
            <NavLink to="/">Back to main</NavLink>
            <button type="submit">Submit</button>
          </div>
          <br/>

          <div className="signup_invalid_errors_container">
            {invalidErrors ? invalidErrors.map((err, idx) => <li key={idx}>{err}</li>) : null}
          </div>
        </form>
    </div>
  )
}

export default SignUp