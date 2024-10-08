/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./sourceComponents/Navbar"
import Footer from "./sourceComponents/Footer"
import Login from "./pages/Login"
import Register from "./pages/Register"


import AdminDashboard from "./admin/AdminDashboard"
import CreateEvent from "./admin/Create-Event"
import { useSelector } from "react-redux"
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute"
import Event from "./pages/Event"
import EditEvent from "./admin/Edit-Event"
import GetAllEvent from "./admin/GetAllEventTable"
import Contact from "./pages/Contact"
import About from "./pages/About"

import SuccesPayment from "./pages/SuccesPayment"
import FailedPayment from "./pages/FailedPayment"
import UserDashboard from "./User/UserDashboard"
import TicketBookPage from "./admin/TicketBookPage"
import GetBookTicket from "./User/GetBookTicket"
// import GetAllUsers from "./admin/GetAllUser"


function App() {
  const token = localStorage.getItem('token')
  const { isLoggedIn,isAdmin} = useSelector((state) => state.auth);
  // console.log("isAdmin: " + isAdmin);
  // console.log("isLoggedIn: " + isLoggedIn);
  // console.log("isLoggedIn && isAdmin : "+ isLoggedIn && isAdmin);
  
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events" element={<Event/>} />
          <Route path="/admin/*" element={<ProtectedRoute element={<AdminDashboard />} adminOnly={true} />} />
         <Route path="/contact" element={<Contact/> } />
         <Route path="/about" element={<About/> } />
         {/* <Route path="/book-ticket" element={<ProtectedRoute element={<BookTicket/>}/> } /> */}
         <Route path="/success" element={<SuccesPayment/> } />
         <Route path="/failed" element={<FailedPayment/> } />
         {/* <Route path="/userdashboard/*" element={<ProtectedRoute element={<UserDashboard/> }/> } /> */}
         <Route path="/book-ticket" element={<ProtectedRoute element={<TicketBookPage/>} /> } />
         {/* <Route path="/book-ticket" element={TicketBookPage} /> */}
         <Route path="/userdashboard/*" element={<UserDashboard/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}



export default App
