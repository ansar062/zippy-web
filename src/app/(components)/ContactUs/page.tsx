'use client';
import { motion } from "framer-motion";

export default function ContactUs() {
    return (
        <div className="bg-[#FFD700] min-h-full min-w-full pt-[8rem]">
            <section   id="welcome" className=" ml-[2rem]   flex-row  ">
            <div className="w-[50rem] h-[30rem] absolute opacity-70  ">
                <img src="images/image-25.png" className=" w-[35rem] h-[38rem] rounded-l-[8rem] md:rounded-l-[6rem] md:h-[25rem] md:w-[25rem] rounded-r-[10rem] md:rounded-r-[10rem]" alt="" />
                </div>
                <motion.div initial={{scale:.9}} animate={{scale:1}}  transition={{duration:2, type: 'tween' }} className="justify-center items-center w-[39rem] h-[30rem] mt-[4rem] ml-[2rem] bg-white/70 rounded-l-[3rem] rounded-r-[6rem] absolute backdrop-blur-sm md:w-[23rem] md:h-[18rem] shadow-md  md:mt-[3rem]">
                    <div className="font-sans font-normal text-black  ">
                        <h1 className="text-[48px] md:text-[2rem] font-bold text-center ">
                            We'd Love to Hear<br></br> From You!
                        </h1>
                        <p className="text-[40px] md:text-[1.4rem] p-2 text-center font-primary ">
                            Thank you for considering Zippy for your dining experience. If you
                            have any questions, feedback, or inquiries, please don't hesitate
                            to get in touch with us
                        </p>
                    </div>
                   
                </motion.div>
                
            </section>
            <section
                id="contact"

            >
                <div className="md:w-[60%] ml-[2rem] w-[48rem]   drop-shadow-md lg:flex lg:flex-col flex-col justify-center md:mt-[2rem] mt-[41rem] md:ml-[35%]">
                    <div className="bg-white backdrop-blur-lg  rounded-tr-[3rem] pl-[3rem] pr-[10rem] text-[1.7rem] font-semibold font-sans py-[2rem]">
                        Send Message
                        <form action="">
                            <div className="flex text-[1.5rem] space-x-5 font-normal py-3">
                                <div className="flex flex-col">
                                    <label htmlFor="fname">First Name</label>
                                    <input className="border-b-2 border-gray-400" type="text" id="fname" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input className="border-b-2 border-gray-400" type="text" id="lastname" />
                                </div>
                            </div>
                            <div className="flex text-[1.5rem] space-x-5 font-normal py-3">
                                <div className="flex flex-col">
                                    <label htmlFor="phonenumber">Phone Number</label>
                                    <input className="border-b-2 border-gray-400" type="text" id="phonenumber" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email">Email</label>
                                    <input className="border-b-2 border-gray-400" type="email" id="email" />
                                </div>
                            </div>
                            <div className="flex flex-col text-[1.5rem] py-3 font-normal">
                                <div className="flex flex-col py-1">
                                    <label htmlFor="g&co">Group or Company</label>
                                    <input className="border-b-2 border-gray-400" type="text" id="g&co" />
                                </div>
                                <div className="flex flex-col py-1">
                                    <label htmlFor="msg">Message</label>
                                    <input className="border-b-2 border-gray-400" type="text" id="msg" />
                                </div>
                            </div>
                            <input
                                className="relative mt-[3rem] cursor-pointer text-[1.3rem] font-sans font-normal rounded-full px-[2rem] py-[0.2rem] bg-[#EB002B] text-white"
                                type="button"
                                value="Submit"
                            />
                        </form>
                    </div>
                    <div className="bg-[#0F0808D4] text-[1.5rem]  rounded-br-[3rem] text-white px-[5rem] space-y-7 flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center">
                            <img
                                className=" w-[2rem]"
                                src="images/iconsax-linear-call.png"
                                alt=""
                            />
                            0800-123456
                        </div>
                        <div className="flex justify-center items-center">
                            <img
                                className="w-[2rem]"
                                src="images/iconsax-linear-sms.png"
                                alt=""
                            />
                            abc@gamil.com
                        </div>
                        <div className="flex justify-center items-center space-x-6 pb-3">
                            <img
                                className="w-[1rem]"
                                src="/images/icon-facebook.png"
                                alt=""
                            />
                            <img
                                className="w-[2rem]"
                                src="/images/icon-instagram.png"
                                alt=""
                            />
                            <img
                                className="w-[2rem]"
                                src="/images/icon-twitter.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="map">
                <div className="pt-[4rem] ">
                    <h1 className="text-left text-[40px] font-semibold font-primary ">Visit Us</h1>
                    <div className="flex  text-left flex-col  items-center w-[50rem] md:w-[90%] pl-2 ">
                        <img src="/images/image-26.png" className=""alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
}
