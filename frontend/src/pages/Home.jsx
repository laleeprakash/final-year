import React from 'react';
import bg from '../assets/homebg.jpg'; // Correct the path if it's in src/assets
import locationimg from "../assets/location.png"
import searchicon from "../assets/search.png"
import { useNavigate } from 'react-router';
function Home() {
  const navigate =  useNavigate();
  const handleAddRestaurantClick = () => {
    navigate("/addrestaurant"); // correct path spelling here
  };
  return (
    <div
      className="bg-cover bg-center w-full h-[60vh]"
      style={{ backgroundImage: `url(${bg})` }} // Use the correct variable name (bg)
    >
     <ul className='  flex flex-row font-bold justify-end items-end gap-10 p-7 mr-20 text-white' >
      <li className='cursor-pointer hover:text-green-600'>Investor Relations</li>
      <li className='cursor-pointer hover:text-green-600' onClick={handleAddRestaurantClick}>Add Restaurant</li>
     </ul>
     <div>
      <h2 className='flex flex-row justify-center  p-10 font-serif text-5xl text-orange-500'>
        REVERSE YOUR SEAT 
      </h2>
     </div>
     <div>
      <h3 className='flex flex-row justify-center text-5xl font-light tracking-[0.4rem]'>
        Discover The Best Restaurant &  Food
      </h3>
     </div>
      <div className='bg-white h-15 m-10 mx-[20%] rounded-xl flex flex-row justify-between'>
       <div className='flex flex-row'>
       <div className='w-14 m-2'><img src={locationimg} className='pl-5'></img></div>
        <div className='m-3 text-2xl'>
          <input  className=' location text-gray-400 text-lg w-[40vh] px-4' style={{border:'none'}} placeholder='Detect your Location'/>
          
        </div>
       </div>
        <div className='font-bold py-3 text-lg'>|</div>
        <div className='w-14 pt-3'><img src={searchicon} className='pl-5'></img></div>
        <div className='m-3 text-2xl'>
          <input  className=' location text-gray-400 text-lg w-[55vh] px-1 h-' style={{border:'none'}} placeholder='Search your Favtiore Restaurant'/>
        </div>
      </div>
    </div>
  );
}

export default Home;
