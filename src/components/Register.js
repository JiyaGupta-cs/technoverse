import React, { useEffect, useState } from "react";
import "./Register.css";
import Viewer from "./Viewer";
import sample from "../Assets/sample2.mp4";
import technoverse from "../Assets/technoverse.png";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Register = () => {
  const [select, setselect] = useState(false);
  useEffect(() => {
    console.log(select);
  });
  // console.log(select);
  return (
    <>
      <video id="background-video" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
      <Navbar />
      <div className="register w-full h-full">
        <form class="r-form">
          <img
            src={technoverse}
            width={"300px"}
            style={{ marginBottom: "2rem" }}
            alt=""
          />
          <input class="r-input" type="text" placeholder="Name" />
          <input class="r-input" type="text" placeholder="Branch" />
          <input class="r-input" type="text" placeholder="Year" />
          <input class="r-input" type="text" placeholder="Phone Number" />
          <input class="r-input" type="text" placeholder="E-Mail I.D." />
          <div className="r-input flex flex-col gap-5" style={{borderBottom:'none'}}>
           <p> College</p>
<div className="flex gap-8">
          <label className="flex gap-5">

            <input
              className="r-input"
              type="radio"
              name="options"
              checked={!select}
              onChange={() => setselect(false)}
            />
            KIET
          </label>
          <label className="flex gap-5">
            {" "}
            <input
              className="r-input"
              type="radio"
              name="options"
              onChange={() => setselect(true)}
            />
            Other
          </label></div>
          </div>
          {!select && (
            <div className="flex flex-col justify-center items-center gap-8 ">
              <div className="flex-col text-center   lg:text-sm lg:flex-ro ">
              <input className="p-[0.5rem] text-center px-8 rounded m-2 lg:mx-2" type="email" placeholder="Enter KIET Email ID" />
              </div>
            </div>
          )}
          {select && (
            <div className="flex flex-col justify-center items-center gap-8 ">
              <div className="flex-col text-center   lg:text-sm lg:flex-ro ">
              <input className="p-[0.5rem] text-center px-8  rounded m-2 lg:mx-2" type="text" placeholder="Enter college name" />
              {/* <input  className="p-[0.3rem] rounded m-2 lg:mx-2" type="text" placeholder="Enter your house no " /> */}
              </div>
              <img src="" alt="payment qr logo " />
            </div>
          )}

          <center>
            <button class="r-button">Register</button>
          </center>
        </form>
        <div className="box">
          <div className="my-viewer">
            <Viewer />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
