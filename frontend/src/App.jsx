import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ImageUploader from "./pages/image"
import Add_Resta from "./pages/Add_Resta";
function App() {


  return (
    <>

     <BrowserRouter>
     <Router>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/homepage" element={<Home/>}/>
      <Route path="/upload" element={<ImageUploader/>}/>
      
      <Route path="/addrestaurant" element={<Add_Resta />} />

     </Router>
     </BrowserRouter>
    </>
  )
}

export default App
