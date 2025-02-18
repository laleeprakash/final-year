import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputbox";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Add_Resta() {
  const [restaurantData, setRestaurantData] = useState({
    name: '',
    location: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurantData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    setRestaurantData((prevData) => ({
      ...prevData,
      image: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log(restaurantData);
    // Optionally navigate after form submission
    // navigate("/somepage");
  };

  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault();  // Prevent form submission
    navigate("/homepage");  // Navigate to the homepage
  };

  return (
    <div className="flex justify-center w-full h-[100vh] bg-gradient-to-b from-pink-900 to-purple-700">
      <div className="flex flex-col justify-center items-center rounded-3xl">
        <div className="flex justify-center rounded-3xl">
          <div className="bg-slate-300 flex flex-col justify-center">
            <div className="rounded-3xl bg-white w-9/10 p-8">
              <Heading label={"Add Restaurant"} />
              
              <form onSubmit={handleSubmit}>
                <Inputbox
                  label={"Restaurant Name"}
                  type="text"
                  placeholder={"John_doe_restaurant"}
                  id={"restaurantName"}
                  name="name"
                  value={restaurantData.name}
                  onChange={handleChange}
                  required
                />
                
                <Inputbox
                  label={"Location"}
                  type="text"
                  placeholder={"Second Street XYZ Colony"}
                  id={"location"}
                  name="location"
                  value={restaurantData.location}
                  onChange={handleChange}
                  required
                />
                
                <Inputbox
                  label={"Description"}
                  type="text"
                  placeholder={"A cozy place for great food!"}
                  id={"description"}
                  name="description"
                  value={restaurantData.description}
                  onChange={handleChange}
                  required
                />
                
                <Inputbox
                  label={"Image of the Restaurant"}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />

                <div className="flex justify-between">
                  <button 
                    type="submit" 
                    className="mt-4 p-2 px-5 rounded-2xl border border-black bg-black text-white hover:opacity-90"
                  >
                    Add Restaurant
                  </button>
                  <button 
                    className="mt-4 p-2 rounded-2xl border border-black px-8 hover:opacity-95" 
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_Resta;
