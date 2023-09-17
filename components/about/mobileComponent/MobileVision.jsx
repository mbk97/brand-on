import React from "react";
import about from "../../../public/vision.png";
import Image from "next/image";

const MobileVision = ({ handleNextTab, tabIndex, handlePrevTab }) => {
  return (
    <div className="flex  flex-col gap-10">
      <div className="border-t border-[#FF931E] flex w:full mt-7">
        <button
          className="cursor-pointer text-center w-[158px] flex justify-center items-center "
          onClick={handlePrevTab}
        >
          Our Mission
        </button>
        <button
          className={`${tabIndex === 1 ? "active_tab" : ""}  my-5`}
          onClick={handleNextTab}
        >
          Our Vision
        </button>
      </div>

      <section>
        <div>
          <h1 className="text-2xl md:text-5xl">
            We Lead Your Business Team To Victory
          </h1>
          <p className="w-full md:w-[656px] md:text-xl text-base mb-5">
            We are the Einsteins, the non-conformists, the adventurers that
            don’t think in and out of the box but go constantly on the search to
            break boxes and templates that businesses try to fit in so we can
            bring them to their land of gems and treasures.{" "}
            <a
              href="/about-pdf/BrandOn Agency.pdf"
              download={true}
              className="font-bold underline"
            >
              Download our full profile...
            </a>
          </p>
        </div>

        <div className="bg-[#F9F9F9]  w-full">
          <p className="text-[#FF931E] p-4 text-[18px]  mr-2">
            To create Prosperity for Brands through Branding & Marketing and
            move businesses to a unicorn status within a decade
          </p>
        </div>
      </section>
      <section>
        <div className="w-[100%]  mb-8" data-aos="flip-left">
          <Image src={about} alt="hello" />
        </div>
      </section>
    </div>
  );
};

export default MobileVision;
