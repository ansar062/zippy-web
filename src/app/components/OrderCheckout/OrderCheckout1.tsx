"use client";

import { motion } from "framer-motion";

export default function OrderCheckOut1() {
    return (
        <div className="bg-white min-h-screen">
            <div className="flex space-x-10 items-center justify-center pt-[5rem]">
                <div className="flex flex-col items-center">
                    <div className="bg-[#EB002B] rounded-full h-14 w-14 text-white text-[38px] flex justify-center items-center">
                        1
                    </div>
                    <h1>Customer Details</h1>
                </div>
                <hr className="h-[0.1rem] bg-[#BBB0B2] w-[10rem]  " />
                <div className="flex flex-col items-center">
                    <div className="bg-[#BBB0B2] rounded-full h-14 w-14 text-white text-[38px] flex justify-center items-center">
                        2
                    </div>
                    <h1>Payment Method</h1>
                </div>
                <hr className="h-[0.1rem] bg-[#BBB0B2] w-[10rem]" />
                <div className="flex flex-col items-center">
                    <div className="bg-[#BBB0B2] rounded-full h-14 w-14 text-white text-[38px] flex justify-center items-center">
                        3
                    </div>
                    <h1>Confirmation</h1>
                </div>
            </div>
            <div className="text-[32px] flex flex-col justify-center items-center pt-[5rem]">
                <RadioOptions />
                <div className="flex">
                    <div className="flex flex-col p-8">
                        <label htmlFor="fname">First Name</label>
                        <input className="border-b-2 border-gray-400" type="text" name="" id="fname" />
                    </div>
                    <div className="flex flex-col p-8">
                        <label htmlFor="lastname">Last Name</label>
                        <input className="border-b-2 border-gray-400" type="text" name="" id="lastname" />
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col p-8">
                        <label htmlFor="phonen">Phone No.</label>
                        <input className="border-b-2 border-gray-400" type="text" name="" id="phonen" />
                    </div>
                    <div className="flex flex-col p-8">
                        <label htmlFor="email">Email</label>
                        <input className="border-b-2 border-gray-400" type="email" name="" id="email" />
                    </div>
                </div>
                <div className="flex flex-col ml-[-27rem]">
                    <label htmlFor="address">Address</label>
                    <input className="border-b-2 border-gray-400" type="text" name="" id="address" />
                </div>
            </div>

            <div className="flex justify-end items-end px-[10rem] pt-[5rem]">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <input className="bg-[#EB002B] text-white cursor-pointer py-[0.2rem] text-[32px] font-normal px-[1rem] rounded-full" type="button" value="Next ->" />
                </motion.div>
            </div>
        </div>
    )
}


export function RadioOptions() {
    return (
        <div className="flex space-x-[10rem]">
            <div className="flex justify-center items-center space-x-5">
                <input className="accent-[#EB002B]" type="radio" name="" id="onlinepayment" />
                <label htmlFor="onlinepayment">Online Payment</label>
            </div>
            <div className="flex justify-center items-center space-x-5">
                <input className="accent-[#EB002B]" type="radio" name="" id="ondelievry" />
                <label htmlFor="ondelievry">Cash on Delievry</label>
            </div>
        </div>
    )
}