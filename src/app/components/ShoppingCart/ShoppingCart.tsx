"use client";

import { motion } from "framer-motion";

export default function ShoppingCart() {
  return (
    <div className="flex min-h-screen bg-white">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex px-[20px] py-[2rem] space-y-[3rem] w-[80rem] text-black text-[40px] flex-col items-center bg-white"
      >
        <div className="flex font-semibold space-x-[40rem]">
          <h1>Shopping Cart</h1>
          <h1>3 Items</h1>
        </div>
        <hr className="h-[2px] bg-[#EB002B] w-full" />
        <div className="flex space-x-[25rem] flex-shrink justify-evenly">
          <h1>Product Details</h1>
          <div className="flex space-x-[15rem]">
            <h1>Qty</h1>
            <h1>Price</h1>
          </div>
        </div>

        <EachProductItemInShoppingCart
          name="Mighty Zinger"
          imgUrl="images/image-1.png"
          qty="1"
          price="850"
        />
        <EachProductItemInShoppingCart
          name="Krunch Burger"
          imgUrl="images/screenshot-202308021130211.png"
          qty="1"
          price="500"
        />
        <EachProductItemInShoppingCart
          name="Rice N Chicken"
          imgUrl="images/image-9.png"
          qty="1"
          price="500"
        />
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex h-[51rem] px-[20px] space-y-[3rem] w-[40rem] text-white text-[40px] flex-col items-center bg-[#0F0808D4]"
      >
        <h1 className="font-semibold">Order Summary</h1>
        <div className="flex space-x-[15rem]">
          <h1>3 Items</h1>
          <h1>1650</h1>
        </div>
        <div className="flex space-x-[15rem]">
          <h1>Shipping</h1>
          <h1>150</h1>
        </div>
        <div className="flex space-y-[0.5rem] flex-col justify-start items-start">
          <h1>Promo Code</h1>
          <input
            type="text"
            className="bg-[#D9D9D9] focus:text-black text-[36px] py-[0.5rem] px-[1rem] rounded-lg"
            placeholder="Enter Code"
          />
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <input
              className="bg-[#EB002B] cursor-pointer py-[0.2rem] text-[36px] font-normal px-[1rem] rounded-full"
              type="button"
              value="Apply"
            />
          </motion.div>
        </div>

        <hr className="h-[1px] bg-[#FFFFFF] w-full" />

        <div className="flex space-x-[15rem]">
          <h1>Total</h1>
          <h1>1850</h1>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <input
            className="cursor-pointer bg-[#EB002B] py-[0.5rem] mt-[2rem] text-[36px] font-normal px-[1rem] rounded-full"
            type="button"
            value="Proceed to Checkout"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function EachProductItemInShoppingCart(props: {
  imgUrl: String;
  name: String;
  qty: String;
  price: String;
}) {
  return (
    <div className="flex space-x-[15rem] flex-shrink justify-evenly">
      <div className="flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img src={`${props.imgUrl}`} alt="" />
        </motion.div>
        <h1 className="text-[36px]">{props.name}</h1>
      </div>
      <div className="flex justify-center items-center space-x-[15rem]">
        <h1>{props.qty}</h1>
        <h1>{props.price}</h1>
      </div>
    </div>
  );
}
