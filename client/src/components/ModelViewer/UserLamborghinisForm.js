import { useState } from "react"

const UserLamborghinisForm = ({ username, setFetchFlag }) => {
    const [ model, setModel ] = useState("")
    const [ name, setName ] = useState("")
    const [ img_url1, setImg_url1 ] = useState("")
    const [ img_url2, setImg_url2 ] = useState("")
    const [ img_url3, setImg_url3 ] = useState("")
    const [ description, setDescription ] = useState("")

    const handleUserLamborghiniSubmit = (e) => {
        e.preventDefault()

        fetch("model_list", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: model,
                name: name,
                img_url1: img_url1,
                img_url2: img_url2,
                img_url3: img_url3,
                description: description + `by ${username}`,
                specifications: null,
                created_by_user: true
            })
        })
        .then(r => r.json())
        .then(() => setFetchFlag(true))
    }    

    return (
        <form onSubmit={handleUserLamborghiniSubmit}>
            <h3>Show off your Lamborghinis</h3>
            
            <label>Model</label>
            <input type="text" name="model" onChange={e => setModel(e.target.value)} required={true} />

            <label>Name</label>
            <input type="text" name="name" onChange={e => setName(e.target.value)} required={true} />

            <label>Image URL1</label>
            <input type="text" name="img_url1" onChange={e => setImg_url1(e.target.value)} required={true} />

            <label>Image URL2</label>
            <input type="text" name="img_url2" onChange={e => setImg_url2(e.target.value)} placeholder="optional" />

            <label>Image URL3</label>
            <input type="text" name="img_url3" onChange={e => setImg_url3(e.target.value)} placeholder="optional" />

            <label>Description</label>
            <input type="text" name="description" onChange={e => setDescription(e.target.value)} placeholder="optional" />
            <br/>

            <button type="submit">Submit</button>
        </form>
    )
}

export default UserLamborghinisForm