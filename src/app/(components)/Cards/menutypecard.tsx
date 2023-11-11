"use client";

import Image from 'next/image';

import { motion } from "framer-motion";

export default function MenuTypeCard(props: { idfuntion:any,function :any, imgUrl: String, name: String, desc: String, price: String }) {
    return (
        <motion.div
            whileHover={{ scale: 1.1  }}
            initial={{ y: 10, opacity: 0  }}
             onClick={()=>{props.function();
                props.idfuntion(props.name)}}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: .3 }}
            className="bg-white  w-[13rem] h-[12.5rem] shadow-2xl mr-[3rem] ml-2 rounded-3xl rounded-bl-3xl px-[1rem] flex flex-col">
            <div className="flex flex-col justify-center items-center shadow-xl rounded-xl   bg-gradient-to-r from-white/60 mt-[1rem] ">
            <img className="scale-50 " src="/images/group-22.png" alt="" />
            <img className=" w-[7rem] h-[7rem] " src={`${props.imgUrl}`} alt="" />
            <h1 className="text-[1.2rem] pt-[2.7rem] font-bold font-primary">{props.name}</h1>
            
            </div>
            
        </motion.div>
    )


}

