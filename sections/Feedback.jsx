"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import {
  fadeIn,
  staggerContainer,
  zoomIn,
  planetVariants,
  slideIn,
} from "../utils/motion";
import { TitleText, TypingText } from "../components";

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Message Me " textStyles="text-center" />
      <TitleText title={<>Contact</>} textStyles="text-center" />
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <div className="grid gap-4 justify-center mt-10">
          <input
            placeholder="Name"
            type="text"
            required
            className="text-center text-white bg-transparent  border-2 rounded-md w-[400px] p-1 realtive  "
          />
          <input
            placeholder="Email"
            required
            className="text-center text-white bg-transparent  border-2 rounded-md p-1"
          />
          <textarea
            placeholder="Message"
            className="text-center text-white bg-transparent  border-2 rounded-md w-[400px] h-[120px]"
          />
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <img
          src="/get-started.png"
          alt="planetbg"
          className="opacity-10 absolute w-[540px] -top-[259px] left-[78px] select-none pointer-events-none"
        />
        {/* <img
          src="/whats-new.png"
          alt="newbg"
          className="opacity-10 absolute w-[520px] -bottom-[50px] -right-[30px]"
        /> */}

        <div className=" relative grid gap-5 justify-center mt-12  ">
          <button className="font-black  border-2 rounded-md bg-transparent text-white p-1 w-[200px] hover:bg-[#3eabf4] hover:scale-110 hover:-translate-y-1">
            Send
          </button>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
