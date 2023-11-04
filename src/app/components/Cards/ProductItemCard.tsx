"use client";

import Image from 'next/image';

import { motion } from "framer-motion";

export default function ProductItemCard(props: { imgUrl: String, name: String, desc: String, price: String }) {
    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
            className="bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-[30rem] rounded-br-3xl rounded-bl-3xl px-[1rem] flex flex-col">
            <div className="flex flex-col justify-center items-center">
            <img className="scale-50" src="/images/group-22.png" alt="" />
            <img className="h-[19rem] w-[20rem] scale-90" src={`${props.imgUrl}`} alt="" />
            <h1 className="text-[36px] pt-2 font-bold">{props.name}</h1>
            <h3 className="text-[24px] pt-2 font-normal">{props.desc}</h3>
            </div>
            <h1 className="text-[32px] pt-2 pl-2 font-bold">Rs.{props.price}</h1>
            <motion.div className="flex mt-4 justify-center items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <input
                    className="cursor-pointer text-white bg-[#DFDADA] py-[0.5rem] mb-[-2rem] text-[32px] font-normal px-[1rem] rounded-2xl hover:bg-[#EB002B]"
                    type="button"
                    value="Add to Cart"
                />
            </motion.div>
        </motion.div>
    )


}

