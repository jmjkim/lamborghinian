import React, { useState, useEffect} from 'react';

const UserContext = React.createContext()

const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState({})
    const [ userSignedIn, setUserSignedIn ] = useState(false)

    useEffect(() => {
        fetch("/usersignedin")
        .then(r => r.json())
        .then(data => {
            setUser(data)
            !data.error ? setUserSignedIn(true) : setUserSignedIn(false) 
        })
    }, []);

    const signUp = (user) => {
        setUser(user)
        setUserSignedIn(true)
    }

    const signIn = (user) => {
        setUser(user)
        setUserSignedIn(true)
    }

    const signOut = () => {
        setUser({})
        setUserSignedIn(false)
    }

    return(
        <UserContext.Provider value={{ user, userSignedIn, signUp, signIn, signOut }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }