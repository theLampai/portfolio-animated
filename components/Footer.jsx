'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5" />

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Lampai</h4>
          <p className="font-normal text-14px text-white opacity-50">
            Copyright © 2023 Lampai. All rights reserved.
          </p>
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
      </div>
    </div>
  </motion.footer>
);

export default Footer;
