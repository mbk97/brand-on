import React from "react";
import {
  socialMediaData,
  worksTabData,
  brandIdentityData,
  allContentData,
  websiteData,
} from "@/utils/tabData";
import Image from "next/image";

export const All = () => {
  return (
    <div className="flex flex-wrap px-2 justify-center gap-6">
      {allContentData.map((item) => {
        return (
          <div key={item.id} className="h-[650px] md:h-[700px]">
            <Image
              src={item.image}
              alt="hello"
              style={{
                objectPosition: "center",
                height: "408px",
              }}
              className="md:w-[500px] md:h-[400px] w:full h-[300px] "
            />
            <div className="mt-5 pl-6">
              <p className="text-[#ff931e]  font-semibold text-2xl">
                {item.title}
              </p>
              <p className="md:w-[350px] h-[90px]">{item.description}</p>
              <p className="text-[#747474] mb-3">{item.tagOne}</p>
              <ul>
                <li className=" list-disc marker:text-[#ff931e] text-[14px]">
                  {item.tagTwo}
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const Brand = () => {
  return (
    <div className="flex flex-wrap px-2 justify-center gap-6">
      {brandIdentityData.map((item) => {
        return (
          <div key={item.id} className="h-[650px] md:h-[700px]">
            <Image
              src={item.image}
              alt="hello"
              style={{
                objectPosition: "center",
                height: "408px",
              }}
              className="md:w-[500px] md:h-[400px] w:full h-[300px] "
            />
            <div className="mt-5 pl-6">
              <p className="text-[#ff931e]  font-semibold text-2xl">
                {item.title}
              </p>
              <p className="md:w-[350px] h-[90px]">{item.description}</p>
              <p className="text-[#747474] mb-3">{item.tagOne}</p>
              <ul>
                <li className=" list-disc marker:text-[#ff931e] text-[14px]">
                  {item.tagTwo}
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const Social = () => {
  return (
    <div className="flex flex-wrap px-2 justify-center gap-6">
      {socialMediaData.map((item) => {
        return (
          <div key={item.id} className="h-[650px] md:h-[700px]">
            <Image
              src={item.image}
              alt="hello"
              style={{
                objectPosition: "center",
                height: "408px",
              }}
              className="md:w-[500px] md:h-[400px] w:full h-[300px] "
            />
            <div className="mt-5 pl-6">
              <p className="text-[#ff931e]  font-semibold text-2xl">
                {item.title}
              </p>
              <p className="md:w-[350px] h-[90px]">{item.description}</p>
              <p className="text-[#747474] mb-3">{item.tagOne}</p>
              <ul>
                <li className=" list-disc marker:text-[#ff931e] text-[14px]">
                  {item.tagTwo}
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const Website = () => {
  return (
    <div className="flex flex-wrap px-2 justify-center gap-6">
      {websiteData.map((item) => {
        return (
          <div key={item.id} className="h-[650px] md:h-[700px]">
            <Image
              src={item.image}
              alt="hello"
              style={{
                objectPosition: "center",
                height: "408px",
              }}
              className="md:w-[500px] md:h-[400px] w:full h-[300px] "
            />
            <div className="mt-5 pl-6">
              <p className="text-[#ff931e]  font-semibold text-2xl">
                {item.title}
              </p>
              <p className="md:w-[350px] h-[90px]">{item.description}</p>
              <p className="text-[#747474] mb-3">{item.tagOne}</p>
              <ul>
                <li className=" list-disc marker:text-[#ff931e] text-[14px]">
                  {item.tagTwo}
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};
