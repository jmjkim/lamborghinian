import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user";

const ViewModelList = () => {
    const { userSignedIn } = useContext(UserContext)
    const [ models, setModels ] = useState([])

    const navigate = useNavigate()
    
    useEffect(() => {
        fetch("/lamborghinis")
        .then(r => r.json())
        .then(setModels)
    }, []);

    const modelListDisplayer = (arr, modelName) => {
        return arr.map(obj => obj.model === modelName ? 
            <div key={obj.id} className="individual_model_list_subcontainer">
                <div className="name_container">
                    <p>{obj.name.toUpperCase()}</p>
                </div>

                <div className="individual_model_list_img_container">
                    <img onClick={() => navigate(`${obj.id}`)} src={`${obj.img_url1}`} alt="lamborghini"/>
                </div>
            </div> : null
            )
        }

    if (!userSignedIn) return <h1>Unauthorized</h1>

    return (
        <>
            {models.length > 0 && userSignedIn ? 
                <>
                    <div className="model_list_container">
                        <h2>AVENTADOR</h2>
                        <div className="individual_model_list_container">
                            {modelListDisplayer(models, "aventador")}
                        </div>

                        <h2>HURACAN</h2>
                        <div className="individual_model_list_container">
                            {modelListDisplayer(models, "huracan")}
                        </div>

                        <h2>URUS</h2>
                        <div className="individual_model_list_container">
                            {modelListDisplayer(models, "urus")}
                        </div>
                    </div>
                </> : <h1>Nothing to display</h1>}
        </>
    )
}

export default ViewModelList