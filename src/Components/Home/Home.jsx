import React, { useContext, useEffect, useState } from "react";
import Swipper from "../Swipper/Swipper";

import { AuthContext } from "../../context/AuthProvider";
import Card from "../Card/Card";
import { useQuery } from "@tanstack/react-query";
import SingleClass from "../SingleClass";
import useSeller from "../../hooks/useSeller/useSeller";
import useAdmin from "../../hooks/useAdmin/useAdmin";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import SIngleInstructor from "../../SIngleInstructor";
import Spinner from "../../Spinner/Spinner";
import Banner from "../Banner/Banner";
import Review from "../Review/Review";
import Marquee from "react-fast-marquee";
import Authenticity from "../Authenticity/Authenticity";
import Statistics from "../Statistics/Statistics";
import Faq from "../Faq/Faq";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { user } = useContext(AuthContext);

  const [isSeller] = useSeller(user?.email);
  const [isAdmin] = useAdmin(user?.email);

  const [instructors, setInstructors] = useState([]);
  const uri = `https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/allclassesserial?query='home'`;
  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      try {
        const res = await fetch(uri);
        const data = await res.json();
        return data;
      } catch (err) {}
    },
  });
  useEffect(() => {
    fetch(
      "https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/getinstructors"
    )
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  console.log(instructors);

  // if (!instructors || !classes) {
  //     return <Spinner></Spinner>
  // }
  const handleToSelectCourse = (product) => {
    const { _id, ...productWithoutId } = product;
    const info = {
      studentemail: user.email,
      SRLnumber: product._id,
      ...productWithoutId,
    };
    fetch(
      `https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/selectCourse`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      }
    ).then(() => {
      toast.success("Added to your selected list");
      refetch();
    });
  };
  console.log(classes);
  return (
    <div>
      <Helmet>
        <title>Sterio Music | Home</title>
      </Helmet>
      <Banner></Banner>
      <Swipper></Swipper>
      <Authenticity></Authenticity>
      <Review></Review>

      <div>
        <h1 className="text-5xl  mb-10 border-y-4 font-medium text-center mx-auto  w-2/4 font-serif decoration-slate-300 text-red-500 italic">
          {" "}
          Top Class You May LIke
        </h1>
        <div className="container mx-auto ">
          {!user && (
            <Marquee speed={100}>
              <p className="animate-pulse text-3xl pb-2  text-red-500 font-mono font-light ">
                To Select a class you should Sign Up
              </p>
            </Marquee>
          )}
        </div>
        <div className="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4  p-3">
          {classes.map((product) => (
            <SingleClass key={product._id} product={product}>
              {user && !isSeller && !isAdmin && (
                <div>
                  <button
                    className={`btn mx-2 btn-xs btn-primary`}
                    disabled={product.seats == 0 ? true : false}
                    onClick={() => handleToSelectCourse(product)}
                  >
                    Select
                  </button>
                  <button
                    disabled={product.seats == 0 ? true : false}
                    className="btn mx-2 btn-xs btn-secondary"
                  >
                    <Link to={`/dashboard/payment/${product._id}`}>Enroll</Link>{" "}
                  </button>
                </div>
              )}
            </SingleClass>
          ))}
        </div>
        <h1 className="text-5xl mb-5 mt-10 border-y-4 font-medium text-center mx-auto  w-1/4 font-serif decoration-slate-300 text-red-500 italic">
          {" "}
          Best 6 Instructor
        </h1>
        <div className="container max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-2 p-11 border-rose-500  rounded-2xl gap-6 gap-y-20 mb-10 ">
          {instructors.map((instructor) => (
            <SIngleInstructor
              key={instructor._id}
              instructor={instructor}
            ></SIngleInstructor>
          ))}
        </div>
      </div>

      <Statistics></Statistics>
      <Faq></Faq>
    </div>
  );
};

export default Home;
