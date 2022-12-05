import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/user";

import CommentSection from "../Comment/CommentSection"

const ViewModel = () => {
    const { id } = useParams()
    const { user, userSignedIn } = useContext(UserContext)
    const [ lamborghini, setLamborghini ] = useState({})
    const [ fetchError, setFetchError ] = useState("")
    const [ fetchFlag, setFetchFlag ] = useState(false)
    
    useEffect(() => {
        fetch(`/lamborghinis/${id}`)
        .then(r => r.json())
        .then(data => {
            if (!data.error) {
                setLamborghini(data)
                setFetchFlag(false)
            }

            else 
                setFetchError(data.error)
            })
        }, [id, fetchFlag]);

    const displayModelSpecifications = () => {
        return (
            <div className="model_specifications_container">
                {lamborghini.specifications ? 
                    <>
                        <h1>{lamborghini.name.toUpperCase()}</h1>
                
                        <div className="model_specifications">
                            {Object.keys(lamborghini.specifications).map(spec => {return <li key={spec}>{spec.replaceAll("_", " ")}</li>})}
                        </div>
                
                        <div className="model_specifications">
                            {Object.values(lamborghini.specifications).map(value => {return <li key={value}>{value}</li>})}
                        </div>    
                    </> : null}
            </div>
        )
    }

    const displayModelImages = () => {
        return (
            <div className="model_img_container">
                <img src={`${lamborghini.img_url1}`} alt="lamborghini"/>
                <img src={`${lamborghini.img_url2}`} alt="lamborghini"/>
                <img src={`${lamborghini.img_url3}`} alt="lamborghini"/>
            </div>
        )
    }

    if (!userSignedIn) return <h1>{user.error}</h1>

    return (
        <>
            {lamborghini && userSignedIn ? 
                <div className="model_comment_container">
                    {displayModelSpecifications()}
                    {displayModelImages()}
                    <h3>Swipe &#8594; for more images</h3>

                    <CommentSection id={id} 
                                    user={user}
                                    setFetchFlag={setFetchFlag}
                                    lamborghini={lamborghini} />
                </div> : <h1>{fetchError}</h1>}
        </>
    )
}

export default ViewModel