import React, { useContext } from "react";


import './App.css'
import Menubar from './components/Menubar/Menubar'
import { Route,Routes } from 'react-router-dom'

import ExploreFood from './pages/ExploreFood/ExploreFood'
import Home from './pages/Home/Home'
import Login from "./components/Login/Login";
import Contact from './pages/contact/Contact'
import FoodDetails from './pages/FoodDetails/FoodDetails'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import { ToastContainer } from "react-toastify";
import { StoreContext } from "./context/StoreContext";
import Register from "./components/Register/Register";
import MyOrders from "./pages/MyOrders/MyOrders";


const App =() => {
 
const { token } = useContext(StoreContext);
  return (
  
      <div>
        <Menubar/>
        <ToastContainer />
      

        {/* <Mbar/> */}
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/explore" element={<ExploreFood />} />


         <Route path="/food/:id" element={<FoodDetails />} />
         
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={token ? <PlaceOrder /> : <Login />} />
        {/* <Route path="/order" element={token ? <PlaceOrder /> : <Login />} />  */}
        <Route path="/login" element={token ? <Home /> : <Login />} />
        <Route path="/register" element={token ? <Home /> : <Register />} />
        <Route path="/myorders" element={token ? <MyOrders /> : <Login />} />  
      </Routes> 



      </div>
       
    
  )
}

export default App
