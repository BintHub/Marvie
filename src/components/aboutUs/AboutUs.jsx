import React from "react";
import { Image } from "cloudinary-react";
import apple from "../../assets/apple.svg";
import play from "../../assets/playstore.svg";

const AboutUs = () => {
  return (
    <>
      <div className="grid grid-cols-1  mt-20 lg:grid-cols-2 lg:gap-10 lg:mt-36 lg:mx-10">
        <div className="relative flex w-full h-[521px] justify-center lg:ml-10">
          <Image
            className="w-[274px] h-[274px] md:w-[521px] md:h-[521px] "
            loading="lazy"
            cloudName="dml48ptj8"
            publicId="https://res.cloudinary.com/dml48ptj8/image/upload/v1729510366/Food_Plate_5_1_m3fsln.png"
          ></Image>
          <Image
            className="absolute h-16 w-16 left-0 top-36 md:left-14 md:top-52 lg:-left-5 "
            loading="lazy"
            cloudName="dml48ptj8"
            publicId="https://res.cloudinary.com/dml48ptj8/image/upload/v1729488545/plate_1_lyn3eq.png"
          ></Image>
          <Image
            className=" absolute h-16 w-16 -top-8 right-14 md:-top-12 md:right-56 lg:right-20 "
            loading="lazy"
            cloudName="dml48ptj8"
            publicId="https://res.cloudinary.com/dml48ptj8/image/upload/v1729488546/Food1_2_a9fpqs.png"
          ></Image>
          <Image
            className="absolute h-16 w-16 bottom-44 right-14 md:bottom-20 lg:right-0 lg:bottom-20"
            loading="lazy"
            cloudName="dml48ptj8"
            publicId="https://res.cloudinary.com/dml48ptj8/image/upload/v1729488544/plate_2_ytlgw7.png"
          ></Image>
        </div>

        <div className="w-full lg:w-[468px] h-[403px] -mt-20 md:mt-10 px-4 lg:ml-20">
          <h1 className="w-full mx-auto tracking-widest md:tracking-normal font-redHatDisplay text-primary font-bold text-2xl">
            A Bite into a Journey. A Journey into your Heart. Come Join us.
          </h1>
          <p className="w-full mx-auto font-redHatDisplay font-normal text-lg py-10">
            Lorem ipsum dolor sit amet consectetur. Ut sed non tristique
            tincidunt. Nibh nunc bibendum leo ultricies orci. Viverra ultrices
            risus porttitor odio cursus lorem tincidunt sit. Quis euismod
            sollicitudin enim nibh amet porttitor sit. Nunc eu vitae eget
            senectus amet ornare risus. Lectus purus fames donec tempor. Quis
            euismod sollicitudin enim nibh amet porttitor sit.
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <div>
              <button className="text-white bg-black w-52 h-14 flex border rounded-[10px]">
                <img className="pt-1 px-4" src={apple} alt="icon" />
                <div className="flex flex-col ml-2">
                  <p className="font-redHatDisplay text-sm font-normal">
                    Download on the
                  </p>
                  <h1 className="font-redHatDisplay text-2xl font-semibold ">
                    App Store
                  </h1>
                </div>
              </button>
            </div>
            <div>
              <button className="text-white bg-black flex w-52 h-14 border rounded-[10px]">
                <img className="pt-2 px-4" src={play} alt="icon" />
                <div className="flex flex-col ">
                  <p className="font-redHatDisplay  text-sm font-normal ">
                    GET IT ON
                  </p>
                  <h1 className="font-redHatDisplay text-2xl font-semibold ">
                    Google Play
                  </h1>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
