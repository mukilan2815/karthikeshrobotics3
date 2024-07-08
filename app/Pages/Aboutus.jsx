import React from "react";

const Aboutus = () => {
  return (
    <div className="h-screen bg-[#202020]">
      <h1 className="flex justify-center text-3xl text-white font-bold py-5">
        Aboutus
      </h1>
      <div className="flex mt-10">
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/0b51/e4a9/9a46a3c99a056f1f4f5392c5c84641a4?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TS1Mb9zhQV4ZtuQxmIXan4I-ScaA6mkWl7MHiJ~UYWD71Gohflx-91Fn3GU1obV-ld84K97H-ok5QPPAz6t2GfJRtbm126Pdnyfpz-jf-I18jOFTFL62Nw6PyggS7b5AE3gE87Vh9fMOY3hbh1n4Ni4sdzU3CWRWrwQABQK3C7Eyr91jvpK-seAueseX2Z4OHaW2AREZpk7VQjATV-YIe9DlLEKCgTJNIDvAcstFhoF05UdERMWq2kA2tI9SohmVDukP7kGxy7hdBrE8v7YBClD~y0tCWnGG8dqWr~Q-k5NWRmKnNfIg79iGwWdifjYtGtjTW1MrBtG8vdGKbQI74w__"
            alt="KKR"
            className="w-1/2 border border-white rounded-3xl ml-20"
          />
        </div>
        <div className="text-white">
          <h1 className="font-bold text-2xl">
            We are here to Change the Future
            <br />
            <span className="text-[#D6FD51]">
              Imagine - Innovate - Implement
            </span>
          </h1>
          <p className="pt-10">
            We're venturing into the exciting world of startups, offering
            advanced products like AGVs, humanoids, and more. Our company not
            only merchandise groundbreaking industrial robots, domestic robots
            and real-time solutions, but also dedicated to enlightening the
            younger generation about the latest technology trends through
            mentorship program. We firmly believe in equipping the young minds
            with the knowledge they require to transform the future.
          </p>
          <button className="bg-[#D6FD51] py-3 px-10 rounded-md text-black mt-9">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
