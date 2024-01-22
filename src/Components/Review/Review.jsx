import React from "react";
import rv1 from "../../assets/review/rv1.png";
import rv2 from "../../assets/review/rv2.png";

const Review = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Music Enthusiast",
      text: "Hello next is an incredible platform for anyone passionate about music. It has transformed my musical journey by helping me learn and connect with fellow music lovers. ",
    },
    {
      name: "John Smith",
      position: "Aspiring Pianist",
      text: "I can't express how grateful I am for the online piano lessons. The instructors are top-notch, and I've made remarkable progress. Hello next made my dream of becoming a pianist a reality.",
    },
    {
      name: "Maria Lopez",
      position: "Guitar Enthusiast",
      text: "Hello next is the best online music school I've ever come across. The flexibility and quality of instruction are exceptional. I've improved my guitar skills significantly",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-5xl mt-10 border-y-4  font-medium text-center mx-auto py-2 w-3/4  font-serif decoration-slate-300 text-red-500 italic">
          {" "}
          More than 3000 students have already learned an instrument with
          SterioMusic
        </h1>
        <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <section className="py-24 mx-auto max-w-7xl">
                <div className="w-full mx-auto text-center md:w-4/5 lg:w-3/5">
                  <h1 className="mb-10 text-2xl font-extrabold text-purple-900 md:leading-tight md:text-3xl">
                    "{testimonial.text}"
                  </h1>
                  <div className="mx-auto mb-3 shadow-lg avatar"></div>
                  <p className="text-3xl font-semibold text-purple-900">
                    {testimonial.name}
                  </p>
                  <p className="text-lg font-normal text-purple-900">
                    {testimonial.position}
                  </p>
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
