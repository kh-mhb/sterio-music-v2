import React from "react";

const Faq = () => {
  return (
    <div className="bg-slate-50">
      <section className="px-4  pt-4  pb-10 mb-5 mx-auto max-w-7xl md:px-2">
        <h1 className="text-5xl mt-6 mb-10 border-y-4 font-medium text-center mx-auto  w-2/4 py-2 font-serif decoration-slate-300 text-red-500 italic">
          {" "}
          Frequently Asked Questions
        </h1>
        <div className="flex items-start justify-start mb-12">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="flex-none w-6 h-6 mr-4 text-gray-700"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <p className="mt-0 mb-3 font-semibold text-gray-900">
              How do I choose the right musical instrument to learn?
            </p>
            <p className="text-gray-600">
              Selecting the perfect musical instrument depends on your personal
              preferences and musical goals. We recommend trying out a few
              instruments to see which one resonates with you the most. Our
              school offers guidance and trial lessons to help you make an
              informed decision.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-start mb-12">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="flex-none w-6 h-6 mr-4 text-gray-700"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <p className="mt-0 mb-3 font-semibold text-gray-900">
              Do I need any prior musical experience to enroll in your courses?{" "}
            </p>
            <p className="text-gray-600">
              No prior musical experience is required to enroll in our courses.
              We welcome beginners and seasoned musicians alike. Our courses
              cater to all skill levels, from fundamentals for beginners to
              advanced techniques for experienced players
            </p>
          </div>
        </div>
        <div className="flex items-start justify-start mb-12">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="flex-none w-6 h-6 mr-4 text-gray-700"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <p className="mt-0 mb-3 font-semibold text-gray-900">
              Are the lessons live or pre-recorded?
            </p>
            <p className="text-gray-600">
              Our lessons include a mix of live sessions and pre-recorded
              content. Live sessions provide real-time interaction with
              instructors and peers, while pre-recorded materials offer
              flexibility for self-paced learning. You'll have access to a
              diverse learning experience to suit your needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
