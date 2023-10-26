import leave from "public/images/leave.png";
import tomatoslice from "public/images/tomatoslice.png";

export default function Aboutus() {
  return (
    <>
      <section id="welcome">
        <div className="flex justify-center items-center flex-col min-h-screen">
          <h1 className="z-50 font-primary italic text-[64px] font-normal ">
            Welcome to Zippy
          </h1>
          <h4 className="z-50 text-[32px] font-normal font-sans  w-[600px]">
            At Zippy, we're passionate about serving delicious food that brings
            joy and satisfaction to our customers.
          </h4>
        </div>
        <div className="absolute top-4 left-5">
          <img src="images/leave.png" alt="" />
        </div>
        <div className="absolute top-20 left-80">
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
        <div className="absolute top-80 left-10">
          <img src="images/tomatoslice.png" alt="" />
        </div>
        <div className="absolute top-20 left-40">
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
        <div className="flex justify-center space-x-[23px] items-center w-full p-[40px]">
          <img
            className="h-[600px] w-[500px]"
            src="images/image-22.png"
            alt=""
          />
          <div className="font-sans font-normal space-y-[28px]">
            <h1 className="text-center text-[36px] font-semibold">Our Story</h1>
            <h2 className="text-left w-[1000px] text-[32px]">
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
        <div className="flex justify-center space-x-[23px] items-center w-full p-[40px]">
          <div className="font-sans font-normal space-y-[28px]">
            <h1 className="text-center text-[36px] font-semibold">
              Our Philosophy
            </h1>
            <h2 className="text-left w-[1000px] text-[32px]">
              At [Your Fast Food Business Name], we believe that great food
              starts with the finest ingredients. We source our produce and meat
              from local suppliers, ensuring the freshest and most flavorful
              meals for our customers. We take pride in crafting each dish with
              care, and our team of talented chefs pour their heart into every
              order.
            </h2>
          </div>
          <img
            className="h-[600px] w-[500px]"
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
        <div className="font-sans justify-center pb-[300px] items-center flex flex-col font-normal space-y-[28px]">
          <h1 className="text-center text-[36px] font-semibold">Join Us</h1>
          <h2 className="text-left text-[32px] px-[200px]">
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
