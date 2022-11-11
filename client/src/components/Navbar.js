import { useContext } from "react"
import { useNavigate, NavLink } from "react-router-dom"
import { UserContext } from "../context/user"

const Navbar = () => {
    const { user, userSignedIn, signOut } = useContext(UserContext)
    const navigate = useNavigate()

    const handleSignOut = () => {
        fetch("/signout", {method: "DELETE"})
        .then(() => {
            signOut()
            navigate("/")
        })
    }

    const notSignedIn = () => {
        return (
            <>
                <h2>Welcome</h2>
                
                <div className="userprofile_container">
                    <NavLink to="signin">
                        Sign In
                    </NavLink>

                    <NavLink to="signup">
                        Sign Up
                    </NavLink>
                </div>
            </> 
        )
    }

    const signedIn = () => {
        return (
            <>
                <div className="signedin_navbar">
                    <img id="lamborghini_logo" onClick={() => navigate("/")} src="https://www.lamborghini.com/sites/it-en/files/themes/custom/lambo_facelift_2019/images/logo.png" alt="lamborghini logo"/>

                    <NavLink to="model_list">
                        View Models
                    </NavLink>

                    <NavLink to="user_lamborghinis">
                        User Lamborghinis
                    </NavLink>

                    <NavLink to="my_activity">
                        My Activity
                    </NavLink>

                    <div className="signedin_user_container">
                        <p id="username">{user.username}</p>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="navbar_container">
            {!userSignedIn ? notSignedIn() : signedIn()}
        </div>
    )
}

export default Navbar