"use client"; // This is a client component 




import { motion, useTransform, useScroll } from "framer-motion"
import { useState,useEffect, useRef } from "react";




const THRESHOLD = 0;

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');

  const blocking = useRef(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    prevScrollY.current = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
        const newScrollDirection = scrollY > prevScrollY.current ? 'down' : 'up';

        setScrollDirection(newScrollDirection);

        prevScrollY.current = scrollY > 0 ? scrollY : 0;
      }

      blocking.current = false;
    };

    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true;
        window.requestAnimationFrame(updateScrollDirection);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDirection]);

  return scrollDirection;
};





export default function Aboutus() {
  const targetRef = useRef(null);
  const scrollDirection = useScrollDirection();
   //initial properties
   const initialScale=.4;
   const initialRotate=180;
   const stiffness=10;
   const duration=7;
   const finalScale=.7;

  const {scrollYProgress,scrollX,scrollY} = useScroll({ target:targetRef, offset: ['0 1','3 1']})
 const scale= useTransform(scrollYProgress, [0,1 ], [.5, 1]);
   
   
  
  return (
    <>
      <section ref={targetRef}  id="welcome" className="w-full">
        <div className="flex justify-center mt-[-10rem] items-center flex-col min-h-screen">
          <h1 className="z-50 font-primary md:text-[64px] text-[32px] italic  font-normal ">
            Welcome to Zippy
          </h1>
          <h4 className="z-50 md:text-[32px] text-[22px] font-normal font-sans md:px-[12rem] px-[2rem]">
            At Zippy, we're passionate about serving delicious food that brings
            joy and satisfaction to our customers.
          </h4>
        
        </div>
       
        <motion.div  animate={{rotate: scrollDirection==='up'?0:360,scale:finalScale}} initial={{rotate:scrollDirection==='up'?360:180,  
        scale:initialScale}} transition={{duration:duration,type:'spring', stiffness: stiffness}} className="absolute lg:top-4 lg:left-5 top-8 left-2">
          <img src="images/leave.png" alt="" />
        </motion.div>
       
        <motion.div animate={{rotate: scrollDirection==='up'?0:360,scale:finalScale}} initial={{rotate:scrollDirection==='up'?360:180,  scale:initialScale}} transition={{duration:duration,type:'spring', stiffness: stiffness}} className="absolute lg:top-20 lg:left-80 top-8 left-[60%]">
          <img src="images/leave.png" alt="" />
        </motion.div>
       
        <motion.div  animate={{rotate: scrollDirection==='up'?0:360,scale:finalScale}} initial={{rotate:scrollDirection==='up'?360:180,  scale:initialScale}} transition={{duration:duration,type:'spring', stiffness: stiffness}}className="absolute top-[30rem] left-[10rem]">
          <img src="images/leave.png" alt="" />
        </motion.div>
       
        <motion.div animate={{rotate: scrollDirection==='up'?0:360,scale:finalScale}} initial={{rotate:scrollDirection==='up'?360:180,  scale:initialScale}} transition={{duration:duration,type:'spring', stiffness: stiffness}} className="absolute top-10 right-[10rem]">
          <img src="images/leave.png" alt="" />
        </motion.div>
        <motion.div animate={{rotate: scrollDirection==='up'?0:360,scale:finalScale}} initial={{rotate:scrollDirection==='up'?360:180,  scale:initialScale}} transition={{duration:duration,type:'spring', stiffness: stiffness}} className="absolute top-[30rem] right-[5rem]">
          <img src="images/leave.png" alt="" />
        </motion.div>
        <motion.div animate={{rotate: scrollDirection==='up'?0:360,scale:finalScale}} initial={{rotate:scrollDirection==='up'?360:180,  scale:initialScale}} transition={{duration:duration,type:'spring', stiffness: stiffness}} className="absolute top-[35rem] right-[25rem]">
          <img src="images/leave.png" alt="" />
        </motion.div>
        <motion.div animate={{rotate: scrollDirection==='up'?0:360,scale:finalScale}} initial={{rotate:scrollDirection==='up'?360:180,  scale:initialScale}} transition={{duration:duration,type:'spring', stiffness: stiffness}} className="absolute lg:top-80 lg:left-10 top-10 left-[20%]">
          
          <img src="images/tomatoslice.png" alt="" />
        </motion.div>
        <motion.div animate={{rotate: scrollDirection==='up'?0:360,scale:finalScale}} initial={{rotate:scrollDirection==='up'?360:180,  scale:initialScale}}transition={{duration:duration,type:'spring', stiffness: stiffness}} className="absolute lg:top-20 lg:left-40 top-20 left-[80%]">
          <img src="images/tomatoslice.png" alt="" />
        </motion.div>
        <motion.div animate={{rotate: scrollDirection==='up'?0:360,scale:finalScale}} initial={{rotate:scrollDirection==='up'?360:180,  scale:initialScale}} transition={{duration:duration,type:'spring', stiffness: stiffness}} className="absolute top-40 right-10">
          <img src="images/tomatoslice.png" alt="" />
        </motion.div>
        

        <motion.div animate={{rotate: scrollDirection==='up'?0:360,scale:finalScale}} initial={{rotate:scrollDirection==='up'?360:180,scale:initialScale}} transition={{duration:duration,type:'spring', stiffness: stiffness}} className="absolute top-80 drop-shadow-2xl right-40">
          <img src="images/tomatoslice.png" alt="" />
        </motion.div>
      </section>
      <section id="ourstory" className="bg-yellow">
      
        <motion.div style={{scale:scale}} className="  backdrop-blur-sm bg-white/40 flex   items-center justify-center  space-x-[3rem] w-[80%]  p-[40px] bg-slate-400 rounded-lg ml-4 mt-4 ">
        <img
            className="  h-[400px] w-[400px] "
            src="images/image-22.png"
            alt=""
          />
          <div className="font-sans font-normal space-y-[3rem]">
            <h1 className="text-center lg:text-[36px] text-[32px] font-semibold" >Our Story</h1>
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
        </motion.div>
      </section>
      <section id="Our Philosophy" className=" bg-yellow mt-5">
        <motion.div  style={{scale:scale}} className="backdrop-blur-sm bg-white/40 ml-[20%] rounded-lg flex  space-x-[3rem] items-center w-[80%] p-[40px]">
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
          <div className="absolute top-[40rem] left-[10rem]">
            <img src="images/leave.png" alt="" />
          </div>
        </motion.div>
      </section>
      <section id="join us" className=" bg-yellow mt-6 pb-10">
        <motion.div style={{scale:scale}}>
        <div className="absolute top-[140rem] drop-shadow-2xl right-10">
          <img src="images/tomatoslice.png" alt="" />
        </div>
        <div className="absolute top-[110rem] drop-shadow-2xl left-10">
          <img src="images/tomatoslice.png" alt="" />
        </div>
       
        <div className=" backdrop-blur-sm bg-white/40 ml-[5%] rounded-lg w-[75%] h-[50%]font-sans justify-center pb-[3rem] items-center flex flex-col font-normal space-y-[3rem] ">
          <h1 className="text-center lg:text-[36px] text-[32px] font-semibold">Join Us</h1>
          <h2 className="text-left lg:text-[32px] lg:px-[20rem] px-[1rem]">
            We're more than just a restaurant; we're a community of food lovers.
            Join us on our culinary adventure and be a part of the [Your Fast
            Food Business Name] family. Follow us on social media to stay
            up-to-date with our latest offers, events, and behind-the-scenes
            stories
          </h2>
        </div>
        </motion.div>
      </section>
    </>
  );
}
