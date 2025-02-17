import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputbox";
import { Button } from "../components/Button";
import Bottom from "../components/Bottom";
function Signin(){
  const mailhandler = (e)=>{
    setusername(e.target.value)
  }
  const passwordhandler = ()=>{
    setpassword(e.target.value)
  }
  const singinhandler = ()=>[

  ]
  return(
    <div className=" flex  justify-center w-full h-[100vh] bg-gradient-to-b from-pink-900 to-purple-700 ">
    <div className="flex flex-col justify-center items-center">
       <div className="flex justify-center">
        <div className="bg-slate-300 flex flex-col justify-center">
          <div className="rounded-3xl bg-white w-90 text-center">
            <Heading label={"Sign In "}/>
             <Inputbox label={"Email"} placeholder={"user@gmail.com"} id={"username"} type="gmail" onChange={mailhandler} />
             <Inputbox label={"password"} placeholder={"************"} id={"password"} onChange={passwordhandler} />
            <Button label={"Sign In"} onClick={singinhandler}/>
            <Bottom label={"Don't Have Account :) "} to={"/signup"}/>
          </div>
        </div>
          </div>
    </div>
    </div>
  )
}
export default Signin