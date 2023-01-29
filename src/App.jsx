import React from "react"
import {Routes, Route} from "react-router-dom"
import Home  from "./pages/Home"
import {SignIn} from "./pages/SignIn"
function App() {

  return (
    <Routes>
        <Route path="/signin" element={<SignIn />} />
            
        <Route path="/signup" element={<p>I will be the sign up page</p>} />
            
      
        <Route path="/browse" element={ <p>I will be the browse page</p>} />
           
        <Route path="/" element ={<Home />} />
            

    </Routes>
  )
}

export default App



{/* <Routes>
<Route exact path="/" element={<Photos />} />
<Route exact path="/cart" element={<Cart />} />
</Routes> */}