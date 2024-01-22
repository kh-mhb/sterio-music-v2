import React from "react";
import img from "../../assets/statistics.webp";

const Statistics = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="text-gray-600 body-font">
        <h1 className="text-5xl mt-10 border-y-4 font-medium text-center mx-auto  w-1/4 font-serif decoration-slate-300 text-red-500 italic">
          {" "}
          Statistics
        </h1>
        <div className="container px-5 py-14 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-5xl mb-10 text-gray-900">
                Unlocking a World of Musical Excellence
              </h1>
              <div className="leading-relaxed pt-2 font-normal text-xl">
                PUnveiling the Orchestra of Success: A Harmonious Melody of
                Transformative Statistics, Remarkable Achievements, and
                Heartfelt Impactful Stories that Showcase the Power of Music
                Education
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.8K
              </h2>
              <p className="leading-relaxed">Subscribes</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                35<span className="text-xl">+</span>
              </h2>
              <p className="leading-relaxed">Resource</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                4
              </h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-full"
              src={img}
              alt="stats"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statistics;
