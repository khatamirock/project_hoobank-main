import React from "react";
import styles from "../style";

const Button = ({ styless }) => {
  return <button type="button" className={` ${styles.grd_ros} rounded-[10px] py-4 px-6 font-poppins font-medium text-[18px] text-primary outline-none mt-6 ${styless} `}>
    Get Started
  </button>
};

export default Button;
