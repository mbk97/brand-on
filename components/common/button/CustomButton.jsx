import React from "react";
import { btnSecondaryColor, primaryColor } from "@/utils/color";

const CustomButton = ({ text, primary }) => {
  const buttonStyle = {
    height: "40px",
    width: "100%",
    backgroundColor: primary ? primaryColor : btnSecondaryColor,
    color: primary ? "#ffffff" : "#FF931E",
    fontFamily: "Fredoka",
  };

  return (
    <>
      <button style={buttonStyle} className="rounded-lg text-[20px]">
        {text}
      </button>
    </>
  );
};

export default CustomButton;
