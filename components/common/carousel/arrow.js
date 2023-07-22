import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./style.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="bg-[#272727] h-[40px] w-[40px] flex items-center justify-center arrow_next mt-5 cursor-pointer"
      onClick={onClick}
    >
      <BsArrowRight />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="bg-[#272727] h-[40px] w-[40px] flex items-center justify-center arrow_prev mt-5 cursor-pointer"
      onClick={onClick}
    >
      <BsArrowLeft />
    </div>
  );
}

export { NextArrow, PrevArrow };
