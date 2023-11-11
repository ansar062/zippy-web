"use client";

import Image from 'next/image';

import { motion } from "framer-motion";

export default function ProductItemCard(props: { imgUrl: String, name: String, desc: any, price: String }) {
    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
            className="  w-[13rem]  mr-[6rem] flex pb-[2.5rem] flex-col">
            <div className="flex rounded-2xl px-[1rem]  shadow-xl bg-white flex-col justify-center items-center">
                
            <img className="scale-50 " src="/images/group-22.png" alt="" />
            <svg xmlns="http://www.w3.org/2000/svg" width="123" className='ml-[8.5rem] mt-[-1rem]' height="23" viewBox="0 0 123 38" fill="none">
  <path d="M122.069 0L122.12 37.2323L0.0505263 37.3986L48.8528 18.7159L-0.000196391 0.166298L122.069 0Z" fill="#EB002B"/>
  
</svg>
<h1 className='mt-[-1.4rem] ml-[9.5rem] text-white text-bold font-primary'>{props.price}$</h1>

            <img className=" w-[7rem] h-[7rem]" src={`${props.imgUrl}`} alt="" />
             

            
            <h1 className="text-[1.2rem] pt-2 font-bold font-primary">{props.name}</h1>
           {props.desc!=null&& <h3 className="text-[1.2rem] pt-2 font-normal font-primary">{props.desc}</h3>}
           
            </div>
            <motion.div className="flex mt-4 justify-center items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <input
                    className="cursor-pointer text-white bg-gradient-to-l from-red-500 mt-[1rem]   py-[0.5rem] mb-[-2rem] text-[1.2rem] font-normal px-[1rem] rounded-2xl hover:bg-[#EB002B]"
                    type="button"
                    value="Add to Cart"
                />
            </motion.div>
        </motion.div>
    )


}

