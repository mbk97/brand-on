import React from "react";
import about from "../../../public/vision.png";
import Image from "next/image";
const MobileMission = ({ handleNextTab, tabIndex, handlePrevTab }) => {
  return (
    <div className="flex  flex-col gap-10">
      <div className="border-t border-[#FF931E] flex w:full md:w-[550px] mt-7">
        <button
          className={`${tabIndex === 0 ? "active_tab" : ""}  my-5`}
          onClick={handlePrevTab}
        >
          Our Mission
        </button>
        <button
          className="cursor-pointer text-center w-[158px] flex justify-center items-center "
          onClick={handleNextTab}
        >
          Our Vision
        </button>
        {/* <p className="cursor-pointer">Our Values</p> */}
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
            bring them to their land of gems and treasures.
          </p>
        </div>

        <div className="bg-[#F9F9F9] md:w-[647px] w-full">
          <div className="text-[#FF931E] p-4">
            <p className="text-[#FF931E] font-semibold inline-block mr-2">
              BrandOn
            </p>
            is on the adventure of breaking templates and “by the books” type of
            branding by using research to create custom and data-based branding
            solutions specific to individual brands.
          </div>
        </div>
      </section>
      <section>
        <div className="w-[100%]  mb-8" data-aos="flip-left">
          <Image src={about} />
        </div>
      </section>
    </div>
  );
};

export default MobileMission;
