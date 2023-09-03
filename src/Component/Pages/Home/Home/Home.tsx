import React from "react";
import Process from "../../../Process/Process";
import Review from "../../../Review/Review";
import BeInstructor from "../../Be-Instructor/BeInstructor";
import Blogs from "../../Blogs/Blogs";
import PopularCourse from "../../Courses/PopularCourse";
import Banner from "../Banner/Banner1";
import ContactForm from "../ContactForm/ContactForm";
import HeroSection from "../HeroSection/HeroSection";
// import JoinCourse from "../JoinCourse/JoinCourse";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <HeroSection />
      <BeInstructor></BeInstructor>
      <PopularCourse></PopularCourse>
      <Process />

      {/* <JoinCourse /> */}
      <Review />
      <Blogs />
      <div className="md:hidden my-20 px-2 mx-2">
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
