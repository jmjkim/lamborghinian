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

export default function App() {
  document.title = "Lamborghinian"
  
  return (
    <>
      <UserProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>

          <Route path="/model_list" element={<ViewModelList />} />
          <Route path="/user_lamborghinis" element={<ViewUserLamborghinis />} />
          <Route path="/model_list/:id" element={<ViewModel />} />
          
          <Route path="/my_activity" element={<UserAssociatedLamborghinis />} />
          
          <Route path="*" element={<NoRouteMatch />} />
        </Routes>
      </UserProvider>

      <Footer/>
    </>
  )
}
