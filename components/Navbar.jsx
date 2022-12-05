'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        LAMPAI
      </h2>
      <div className="flex gap-4">
        <a href="http://facebook.com/alieskii">
          <img
            src="facebook.svg"
            alt="facebook "
            className="w-[24px] h-[24px] transform hover:rotate-180 transition duration-500 ease-in-out"
          />
        </a>
        <a href="https://www.instagram.com/islam.alieski/">
          <img
            src="instagram.svg"
            alt="instagram "
            className="w-[24px] h-[24px] transform hover:rotate-180 transition duration-500 ease-in-out"
          />
        </a>
        <a href="https://www.linkedin.com/in/islam-alieski-2b053b21b/?originalSubdomain=mk">
          <img
            src="linkedin.svg"
            alt="linkedin "
            className="w-[24px] h-[24px] transform hover:rotate-180 transition duration-500 ease-in-out"
          />
        </a>
        <a href="https://twitter.com/AlieskiIslam">
          <img
            src="twitter.svg"
            alt="twitter "
            className="w-[24px] h-[24px] transform hover:rotate-180 transition duration-500 ease-in-out"
          />
        </a>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
