"use client"; // This is a client component 
import { motion } from "framer-motion"
import { useState, useEffect } from "react";

function useVerticalScrollDirection() {
  const [direction, setDirection] = useState('up');
  let prevScrollY = 0;

  useEffect(() => {
    // Using lodash, we set a throttle to the scroll event
    // making it not fire more than once every 500 ms.

    const { scrollY } = window;

    // Checks if previous scrollY is less than latest scrollY
    // If true, we are scrolling downwards, else scrollig upwards
    const direction = prevScrollY < scrollY ? 'down' : 'up';

    // Updates the previous scroll variable AFTER the direction is set.
    // The order of events is key to making this work, as assigning
    // the previous scroll before checking the direction will result
    // in the direction always being 'up'.
    prevScrollY = scrollY;

    // Set the state to trigger re-rendering
    setDirection(direction);
  }, [scrollY]);

  return direction;
}

export default function Aboutus() {



  const [rotation, setRotation] = useState(0);

  function pressMe() {
    setRotation(rotation + 20);
    //adds rotation

  }




  return (
    <>
      <section id="welcome" className="w-full">
        <div className="flex justify-center mt-[-10rem] items-center flex-col min-h-screen">
          <h1 className="z-50 font-primary md:text-[64px] text-[32px] italic  font-normal ">
            Welcome to Zippy
          </h1>
          <h4 className="z-50 md:text-[32px] text-[22px] font-normal font-sans md:px-[12rem] px-[2rem]">
            At Zippy, we're passionate about serving delicious food that brings
            joy and satisfaction to our customers.
          </h4>
          <button className="  bg-[#EB002B] rounded-[25px] h-[35px] w-[70px] text-[#FFF] font-sans " onClick={pressMe} >Login</button>
        </div>
        <motion.div animate={{
          x: -52,
          y: 0,
          scale: 1,
          rotate: rotation,
        }}> <div className="absolute lg:top-4 lg:left-5 top-8 left-2">
            <img src="images/leave.png" alt="" />
          </div></motion.div>

        <div className="absolute lg:top-20 lg:left-80 top-8 left-[60%]">
          <img src="images/leave.png" alt="" />
        </div>
        <div className="absolute top-[30rem] left-[10rem]">
          <img src="images/leave.png" alt="" />
        </div>
        <div className="absolute top-10 right-[10rem]">
          <img src="images/leave.png" alt="" />
        </div>
        <div className="absolute top-[30rem] right-[5rem]">
          <img src="images/leave.png" alt="" />
        </div>
        <div className="absolute top-[35rem] right-[25rem]">
          <img src="images/leave.png" alt="" />
        </div>
        <div className="absolute lg:top-80 lg:left-10 top-10 left-[20%]">
          //
          <img src="images/tomatoslice.png" alt="" />
        </div>
        <div className="absolute lg:top-20 lg:left-40 top-20 left-[80%]">
          <img src="images/tomatoslice.png" alt="" />
        </div>
        <div className="absolute top-40 right-10">
          <img src="images/tomatoslice.png" alt="" />
        </div>
        <div className="absolute top-80 drop-shadow-2xl right-40">
          <img src="images/tomatoslice.png" alt="" />
        </div>
      </section>
      <section id="ourstory" className="bg-white">
        <div className="flex justify-center space-x-[3rem] items-center w-full p-[40px]">
          <img
            className="md:h-[600px] md:w-[500px] h-[100px] w-[80px]"
            src="images/image-22.png"
            alt=""
          />
          <div className="font-sans font-normal space-y-[3rem]">
            <h1 className="text-center lg:text-[36px] text-[32px] font-semibold">Our Story</h1>
            <h2 className="text-left  lg:text-[32px] ">
              Our journey began in [Year] when [Founder's Name], a culinary
              enthusiast, decided to share his/her love for mouthwatering fast
              food with the world. Armed with a secret recipe and an unwavering
              vision, [Founder's Name] opened the first [Your Fast Food Business
              Name] restaurant in [Location]. The warmth of our welcoming
              atmosphere, combined with the unmistakable taste of our signature
              dishes, quickly made us a local favorite.
            </h2>
          </div>
        </div>
      </section>
      <section id="Our Philosophy" className=" bg-white">
        <div className="flex justify-center space-x-[3rem] items-center w-full p-[40px]">
          <div className="font-sans font-normal space-y-[3rem]">
            <h1 className="text-center lg:text-[36px] text-[32px] font-semibold">
              Our Philosophy
            </h1>
            <h2 className="text-left  lg:text-[32px]">
              At [Your Fast Food Business Name], we believe that great food
              starts with the finest ingredients. We source our produce and meat
              from local suppliers, ensuring the freshest and most flavorful
              meals for our customers. We take pride in crafting each dish with
              care, and our team of talented chefs pour their heart into every
              order.
            </h2>
          </div>
          <img
            className="lg:h-[600px] lg:w-[500px] h-[100px] w-[80px]"
            src="images/image-23.png"
            alt=""
          />
          <div className="absolute top-[110rem] left-[10rem]">
            <img src="images/leave.png" alt="" />
          </div>
        </div>
      </section>
      <section id="join us" className=" bg-white ">
        <div className="absolute top-[160rem] drop-shadow-2xl right-80">
          <img src="images/tomatoslice.png" alt="" />
        </div>
        <div className="absolute top-[140rem] drop-shadow-2xl left-10">
          <img src="images/tomatoslice.png" alt="" />
        </div>
        <div className="absolute top-[140rem] right-[25rem]">
          <img src="images/leave.png" alt="" />
        </div>
        <div className="font-sans justify-center pb-[10rem] items-center flex flex-col font-normal space-y-[3rem]">
          <h1 className="text-center lg:text-[36px] text-[32px] font-semibold">Join Us</h1>
          <h2 className="text-left lg:text-[32px] lg:px-[20rem] px-[1rem]">
            We're more than just a restaurant; we're a community of food lovers.
            Join us on our culinary adventure and be a part of the [Your Fast
            Food Business Name] family. Follow us on social media to stay
            up-to-date with our latest offers, events, and behind-the-scenes
            stories
          </h2>
        </div>
      </section>
    </>
  );
}
