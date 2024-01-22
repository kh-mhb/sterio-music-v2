import React from "react";
import promise from "../../assets/promise.jpg";

const Authenticity = () => {
  return (
    <div className="max-w-max mx-auto">
      <section className="text-gray-600 body-font">
        <h1 className="text-5xl mt-10 border-y-4 font-medium text-center mx-auto py-2 w-1/4 font-serif decoration-slate-300 text-red-500 italic">
          {" "}
          Our Promise
        </h1>
        <div className="container   py-10 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full  "
              src={promise}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Genuine Musical Guidance
                </h2>
                <p className="leading-relaxed text-base">
                  You'll experience the authenticity of learning from
                  instructors who are not just educators but accomplished
                  musicians in their own right. Our instructors have a rich
                  history of performing, composing, and recording music, and
                  they bring their real-world experience to the virtual
                  classroom
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Authentic Student Achievements
                </h2>
                <p className="leading-relaxed text-base">
                  Our online music school takes pride in showcasing the
                  authentic successes of our students. We believe in
                  transparency and celebrating the achievements of those who
                  have learned with us
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Real-Time Musical Connection
                </h2>
                <p className="leading-relaxed text-base">
                  One of the cornerstones of our online music school is the
                  authentic live interaction you'll have with both your
                  instructors and fellow students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Authenticity;
