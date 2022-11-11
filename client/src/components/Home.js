import { useContext } from "react"
import { UserContext } from "../context/user"

const Home = () => {
  const { userSignedIn } = useContext(UserContext)

  if (userSignedIn) 
    return (
      <div className="signedin_home_background_img_container">
        <img id="signedin_home_background_img" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/accessori_originali/gateway/slider/aven_accessori.jpg" alt="lamborghini"/>
        <h1 id="text_over_img">The indomitable V12 engine of Aventador SVJ stands out for its exceptional design and the advanced technology of its materials. Boasting 770 CV at 8,500 RPMs, and capable of accelerating from 0-100 km/h in 2.8 seconds, Aventador SVJ provides thrills unlike anything that has ever been experienced before. </h1> 
      </div>
      )

  else 
    return <img id="home_background_img" src="https://cutewallpaper.org/21/lamborghini-logo-vector/Lamborghini-DtDzDlDz-DDlDsNDzN.-DDlDsDzDzDlDDDNDD-NDDsNN-NDzNDz.png" alt="lamborghini logo"/>
}

export default Home