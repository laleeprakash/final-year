import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
function App() {


  return (
    <>

     <BrowserRouter>
     <Router>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
     </Router>
     </BrowserRouter>
    </>
  )
}

export default App
