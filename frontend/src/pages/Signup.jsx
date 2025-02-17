import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "/src/App.css";
import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputbox";
import { Button } from "../components/Button";
import Bottom from "../components/Bottom";

function Signup() {
  const navigate = useNavigate();
  
  // State initialization (useState)
  const [username, setusername] = useState("");
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");

  // Event handlers
  const mailhandler = (e) => {
    setusername(e.target.value);
  };

  const phonehandler = (e) => {
    setphone(e.target.value);
  };

  const namehandler = (e) => {
    setname(e.target.value);
  };

  const passwordhandler = (e) => {
    setpassword(e.target.value);
  };

  // Submit handler
  const submithandler = async () => {
    if (!username.endsWith("@gmail.com")) {
      alert("Invalid email, please enter a valid email.");
      return;
    }
    if (phone.length < 10 && phone.length >10) {
      alert("Entered Invalid Phone No");
      return;
    }
    if (username === "" || name === "" || password === "" || phone === "") {
      alert("Everything should be filled...");
      return;
    }
    
    try {
      await axios.post("http://localhost:3000/", {
        username,
        name,
        phone,
        password,
      });
      alert("Account created Successfully click Okay")
      navigate("/signin"); // Navigate to Sign In page after successful signup
    } catch (error) {
      console.error("There was an error during the signup process:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className=" flex  justify-center w-full h-[100vh] bg-gradient-to-b from-pink-900 to-purple-700 ">
    <div className="flex flex-col justify-center items-center">
       <div className="flex justify-center">
        <div className="bg-slate-300 flex flex-col justify-center">
          <div className="rounded-3xl bg-white w-90 text-center">
            <Heading label={"Sign up"} />
            <Inputbox
              label={"Email"}
              placeholder={"user@gmail.com"}
              id={"username"}
              type="email"
              onChange={mailhandler}
            />
            <Inputbox
              label={"Phone No"}
              placeholder={"1234567890"}
              id={"phone"}
            
              onChange={phonehandler}
            />
            <Inputbox
              label={"Username"}
              placeholder={"John Doe"}
              id={"name"}
              onChange={namehandler}
            />
            <Inputbox
              label={"Password"}
              placeholder={"************"}
              id={"password"}
              type="password"
              onChange={passwordhandler}
            />
            <Button label={"Sign up"} onClick={submithandler} />
            <Bottom label={"Already have an account? Sign In"} to={"/signin"} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Signup;
