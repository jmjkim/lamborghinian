import { UserContext } from "../../context/user"
import { useContext } from "react"

import UserLamborghinisForm from "./UserLamborghinisForm"

const ViewUserLamborghinis = ({userLamborghinis, setFetchFlag}) => {
    const { user, userSignedIn } = useContext(UserContext)

    const displayCreateLamborghiniForm = () => {
        return (
            <div className="user_lamborghinis_create_form">
                <UserLamborghinisForm username={user.username} setFetchFlag={setFetchFlag} />
            </div>
        )
    }

    const displayLamborghiniName = (obj) => {
        return (
            <div className="name_container">
                <p>{obj.model.toUpperCase()} {obj.name.toUpperCase()}</p>
            </div>
        )
    }

    const displayLamborghiniImages = (obj) => {
        return (
            <div className="user_lamborghinis_model_list_img_container">
                <img src={`${obj.img_url1 ? obj.img_url1 : null}`} alt="lamborghini"/>
                {obj.img_url2 ? <img src={`${obj.img_url2}`} alt="lamborghini"/> : null}
                {obj.img_url3 ? <img src={`${obj.img_url3}`} alt="lamborghini"/> : null}
            </div>
        )
    }

    const displayLamborghiniDescription = (obj) => {
        return (
            <div className="name_container">
                {obj.img_url2 || obj.img_url3 ? <p>Swipe &#8594; for more images</p> : null}
                <p>{obj.description}</p>
            </div>
        )
    }

    const displayUserLamborghini = (arr) => {
        return (
            <div className="model_list_container">
                <div className="user_lamborghinis_individual_model_list_container">
                    {arr.map(obj => {
                        return (
                            <div key={obj.id} className="user_lamborghinis_model_list_subcontainer">
                                {displayLamborghiniName(obj)}
                                {displayLamborghiniImages(obj)}
                                {displayLamborghiniDescription(obj)}
                            </div>
                        )})}
                </div>
            </div>
        )
    }

    if (!userSignedIn) return <h1>Unauthorized</h1>

    return (
        <>
            {userLamborghinis.length > 0 && userSignedIn ? 
                <>  
                    {displayCreateLamborghiniForm()}
                    {displayUserLamborghini(userLamborghinis)}
                </> : <h1>Nothing to display</h1>}
        </>
        )
}

export default ViewUserLamborghinis