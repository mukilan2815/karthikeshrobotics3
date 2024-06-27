"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Workshop = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="py-5">
      <h1 className="text-xl font-bold flex justify-center">Workshop</h1>
      <div className="flex items-center justify-center">
        <div className="w-1/2 ml-44">
          <h1 className="font-bold mb-5 text-3xl">
            Wanna Conduct Workshops <br />
            in Your institution?
          </h1>
          <p className="w-1/2">
            Our expert team conducts workshops in your area on Robotics, IoT,
            ROS and Automation. Book now!
          </p>
          <button className="p-2 bg-[#D6FD51] px-5 my-4 hover:bg-[#AEEA00] focus:outline-none">
            Book our Team Now !
          </button>
        </div>
        <div className="w-1/2">
          <img
            src="https://s3-alpha-sig.figma.com/img/1d52/4db3/bd0e4fd58a17e7e856d618a674ab3582?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ICjJtvZInWxeAuUq9eFIXXeGNv55s9iVmxdMsBtueH3sRCwQ3lodrSq5jiBR6f5ePl75W2AjVrEkSwIthLLpUkdVo73-hyt1vnvHsU4LryLe58WTdM3DsjePIxCNpoAO8pJP8kdQzJX0IAUOUvtYtxNHgemE~WcQpeCPOFTLkPFhwafunx-GpK~d-R~rnzgeKcDZ8ARCHn04QA2OTVmPSu0n01VArrjBEpmOkio-PKBq21ptu6nrb5CJa6cKpfvDxwEHs7T6ludY24nsJn2BZUMuR117ZAmjFgybwQ~~5bQUjugtLALVllKGcz-DHIKNDenbK8~QvF9k5RfJANR6zQ__"
            alt=""
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Workshop;
