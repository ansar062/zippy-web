export default function ContactUs() {
    return (
        <div className="bg-[#FFD700] min-h-full min-w-full">
            <section id="welcome">
                <div className="flex bg-[#EB002B] justify-center items-center">
                    <div className="font-sans font-normal text-white">
                        <h1 className="text-[48px] font-bold text-center">
                            We'd Love to Hear From You!
                        </h1>
                        <h3 className="text-[40px] text-left px-[10rem]">
                            Thank you for considering Zippy for your dining experience. If you
                            have any questions, feedback, or inquiries, please don't hesitate
                            to get in touch with us
                        </h3>
                    </div>
                    <img src="images/image-25.png" alt="" />
                </div>
            </section>
            <section
                id="contact"

            >
                <div className="w-full h-auto drop-shadow-md lg:flex lg:flex-row flex-col justify-center mt-[-5rem]">
                    <div className="bg-white rounded-l-xl pl-[3rem] pr-[10rem] text-[48px] font-semibold font-sans py-[5rem]">
                        Send Message
                        <form action="">
                            <div className="flex text-[32px] space-x-5 font-normal py-3">
                                <div className="flex flex-col">
                                    <label htmlFor="fname">First Name</label>
                                    <input className="border-b-2 border-gray-400" type="text" id="fname" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input className="border-b-2 border-gray-400" type="text" id="lastname" />
                                </div>
                            </div>
                            <div className="flex text-[32px] space-x-5 font-normal py-3">
                                <div className="flex flex-col">
                                    <label htmlFor="phonenumber">Phone Number</label>
                                    <input className="border-b-2 border-gray-400" type="text" id="phonenumber" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email">Email</label>
                                    <input className="border-b-2 border-gray-400" type="email" id="email" />
                                </div>
                            </div>
                            <div className="flex flex-col text-[32px] py-3 font-normal">
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
                                className="relative mt-[3rem] cursor-pointer text-[40px] font-sans font-normal rounded-full px-[2rem] py-[0.2rem] bg-[#EB002B] text-white"
                                type="button"
                                value="Submit"
                            />
                        </form>
                    </div>
                    <div className="bg-[#0F0808D4] rounded-r-xl text-[40px] text-white px-[5rem] space-y-7 flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center">
                            <img
                                className="h-[50px] w-[50px]"
                                src="images/iconsax-linear-call.png"
                                alt=""
                            />
                            0800-123456
                        </div>
                        <div className="flex justify-center items-center">
                            <img
                                className="h-[50px] w-[50px]"
                                src="images/iconsax-linear-sms.png"
                                alt=""
                            />
                            abc@gamil.com
                        </div>
                        <div className="flex justify-center items-center space-x-6">
                            <img
                                className="h-[50px] w-[27px]"
                                src="/images/icon-facebook.png"
                                alt=""
                            />
                            <img
                                className="h-[50px] w-[50px]"
                                src="/images/icon-instagram.png"
                                alt=""
                            />
                            <img
                                className="h-[40px] w-[50px]"
                                src="/images/icon-twitter.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="map">
                <div className="px-[15rem] py-[5rem]">
                    <h1 className="text-left text-[48px] font-semibold">Visit Us</h1>
                    <div className="flex  text-left flex-col  items-center ">
                        <img src="/images/image-26.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
}
