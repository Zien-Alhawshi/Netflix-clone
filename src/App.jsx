import React from "react"
import {Routes, Route} from "react-router-dom"
import Home  from "./pages/Home"
import {SignIn} from "./pages/SignIn"
import { SignUp } from "./pages/SignUp"
import { Browser } from "./pages/Browse"
function App() {

  return (
    <Routes>
        <Route path="/signin" element={<SignIn />} />
            
        <Route path="/signup" element={<SignUp />} />
            
      
        <Route path="/browse" element={<Browser />} />
           
        <Route path="/" element ={<Home />} />
            

    </Routes>
  )
}

export default App



{/* <Routes>
<Route exact path="/" element={<Photos />} />
<Route exact path="/cart" element={<Cart />} />
</Routes> */}