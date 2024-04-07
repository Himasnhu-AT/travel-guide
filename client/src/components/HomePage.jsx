import React from "react";
import HeroSection from "./heroSection";
import FamousPlaces from "./FamousPlaces";
import TravelBlogPage from "../FeaturesSection/TravelBlogPage";
import UserReviewsPage from "../FeaturesSection/UserReviewsPage";
import SearchPage from "../ServiceSection/SearchResults";
import Footer from "./footer";



function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
     <HeroSection/>
     <SearchPage/>
     <FamousPlaces/> 
     <TravelBlogPage/>
     <UserReviewsPage/>
     <Footer/>
    </div>
  );
}

export default HomePage;
