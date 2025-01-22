import React from 'react';
import { useNavigate } from 'react-router-dom';
function Homepage(){
  const navigate = useNavigate();
  const Signin_handler = () => {
    navigate("/Signin"); // Navigate to the /Signin route
  };
  const Signup_handler = () => {
    navigate("/Signup"); // Navigate to the /Signin route
  };
  return(
    <>
      
        <div className="h-screen  flex flex-col bg-gradient-to-b from-pink-900 to-purple-700 ">
          <h2 className=" font-semibold text-4xl text-center pt-5 text-indigo-100">Welcome to <span className="font-bold text-5xl text-green-600"> Dine with us - Reserve Your Seat  </span></h2>
          <div className="flex flex-col justify-center">
            <div className="py-20 flex flex-row justify-center">
            <p className="bg-white px-4 py-4 flex justify-center text-gray-900 text-xl font-bold text-center w-[75%] rounded-lg">
              
Experience the art of fine dining in a warm and welcoming atmosphere. Our menu features a delightful blend of gourmet dishes crafted with the freshest ingredients. Whether you're here for a casual meal or a special celebration, our attentive staff ensures a memorable dining experience. Enjoy exceptional flavors, outstanding service, and an ambiance that feels like home. Join us and savor the moments that make dining with us truly unforgettable.</p>
            </div>
            <div className="flex items-center justify-center">
              <div className=" text-2xl font-serif flex flex-col items-center justify-center rounded-lg bg-white text-center w-fit px-4 my-4">
              
              <div className="flex flex-row justify-center my-2 "><h3><pre>Don't have an account? </pre> </h3><button className="bg-slate-300 px-2 rounded-lg" onClick={Signin_handler}> Sign Up</button>
              </div>
              <div className="flex flex-row justify-center my-2"><h3><pre>Already have an account? </pre> </h3><button className="bg-slate-300 px-2 rounded-lg" onClick={Signup_handler}>Sign In</button></div>
            </div>
            </div>
           
          </div>
          <footer className="pt-28">
          <div className="bg-gray-800 text-white py-6 ">
  <div className="max-w-7xl mx-auto ">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left">
        <h3 className="text-xl font-semibold text-left">Dining Experience</h3>
        <p className="mt-2 text-sm">Delicious meals. Unforgettable moments. Book your table with us today!</p>
      </div>
      <div className="mt-4 md:mt-0">
        <ul className="flex space-x-6 justify-center md:justify-start">
          <li>
            <a href="/about" className="hover:text-amber-500">About Us</a>
          </li>
          <li>
            <a href="/menu" className="hover:text-amber-500">Menu</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-amber-500">Contact</a>
          </li>
          <li>
            <a href="/privacy-policy" className="hover:text-amber-500">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-6 text-center text-sm">
      <p>&copy; 2025 Dining Experience. All Rights Reserved.</p>
    </div>
  </div>
</div>

          </footer>
  </div>

  </>
  
  )
}
export default Homepage