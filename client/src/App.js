import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/user"

import SignUp from "./components/UserSession/SignUp"
import SignIn from "./components/UserSession/SignIn"

import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

import ViewModelList from "./components/ModelViewer/ViewModelList"
import ViewModel from "./components/ModelViewer/ViewModel"
import ViewUserLamborghinis from "./components/ModelViewer/ViewUserLamborghinis"
import UserAssociatedLamborghinis from "./components/UserSession/UserAssociatedLamborghinis"

import NoRouteMatch from "./components/NoRouteMatch"
import { useState, useEffect } from "react";

export default function App() {
  document.title = "Lamborghinian"

  const [ lamborghinis, setLamborghinis ] = useState({})
  const [ userLamborghinis, setUserLamborghinis ] = useState([])
  const [ fetchFlag, setFetchFlag ] = useState(false)
  const [ fetchError, setFetchError ] = useState("")

  useEffect(() => {
    fetch(`/lamborghinis`)
    .then(r => r.json())
    .then(data => {
        if (!data.error) {
            setLamborghinis(data)
            setFetchFlag(false)
        }

        else 
            setFetchError(data.error)
        })
  }, [fetchFlag]);

  useEffect(() => {
        fetch("/user_lamborghinis")
        .then(r => r.json())
        .then(data => {
            setUserLamborghinis(data)
            setFetchFlag(false)
        })
  }, [fetchFlag]);
  
  return (
    <>
      <UserProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/lamborghinis" element={<ViewModelList lamborghinis={lamborghinis} />} />
          <Route path="/lamborghinis/:id" element={<ViewModel lamborghinis={lamborghinis} fetchError={fetchError} setFetchFlag={setFetchFlag} />} />
          <Route path="/user_lamborghinis" element={<ViewUserLamborghinis userLamborghinis={userLamborghinis} setFetchFlag={setFetchFlag} />} />
          <Route path="/my_activity" element={<UserAssociatedLamborghinis />} />          
          <Route path="*" element={<NoRouteMatch />} />
        </Routes>
      </UserProvider>

      <Footer/>
    </>
  )
}
