import { useState, useEffect, useContext } from "react"
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/user";

const UserAssociatedLamborghinis = () => {
    const { userSignedIn } = useContext(UserContext)
    const [ userAssociatedLamborghinis, setUserAssociatedLamborghinis ] = useState([])
    const [ userComments, setUserComments ] = useState([])
    
    useEffect(() => {
        // fetch("/my_activity")
        // .then(r => r.json())
        // .then(data => setUserAssociatedLamborghinis(data))

        fetch("/usersignedin")
        .then(r => r.json())
        .then(data => {
            // setUserComments(data.comments)
            setUserAssociatedLamborghinis(data.lamborghinis)
            setUserComments(data.comments)
        })
    }, []);

    console.log(userAssociatedLamborghinis)

    const displayUserAssociatedLamborghinis = () => {
        return (
            <div className="user_associated_lamborghini_subcontainer">
                {userAssociatedLamborghinis.map(lamborghini => {
                    let userCommentsOnLamborghini = userComments?.filter(comment => {return comment.lamborghini_id === lamborghini.id})
                    
                    return (
                        <div key={lamborghini.id} className="user_associated_lamborghini_individual_container">
                            <NavLink to={`/model_list/${lamborghini.id}`}>
                                <p>{lamborghini.model}</p>
                                <p>{lamborghini.name}</p>
                            </NavLink>

                            <img src={lamborghini.img_url1} alt="lamborghini" />
                            
                            <p>Number of Your Comments: {userCommentsOnLamborghini.length}</p>
                        </div>
                        )
                    })}
            </div>
            )
    }

    if (!userSignedIn) return <h1>Unauthorized</h1>

    return (
        <>
            {userAssociatedLamborghinis?.length > 0 ?
                <div className="user_associated_lamborghini_container">
                    <h2>Click to View My Comment</h2>

                    {displayUserAssociatedLamborghinis()}

                    <h3>Total Comments: {userComments.length}</h3>
                </div> : <h2>You didn't write any comment yet</h2>
            }
        </>
    )
}

export default UserAssociatedLamborghinis