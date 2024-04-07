import React from "react";
import HeroSection from "./heroSection";
import FamousPlaces from "./FamousPlaces";
import TravelBlogPage from "../FeaturesSection/TravelBlogPage";
import UserReviewsPage from "../FeaturesSection/UserReviewsPage";
import Footer from "./footer";
import ServiceSection from "./ServiceSection";




function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
     <HeroSection/>
     
     <FamousPlaces/> 
     {/* <ServiceSection/> */}
     <TravelBlogPage/>
     <UserReviewsPage/>
     <Footer/>
    </div>
  );
}

export default HomePage;
