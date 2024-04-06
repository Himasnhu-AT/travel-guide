import React from 'react';
import Footer from "./components/footer"; 
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './Pages/aboutus';
import Login from './Pages/login'; 
import HomePage from './components/HomePage';
import RouteSuggestions from './ServiceSection/RouteCard';
import AccommodationRecommendations from './ServiceSection/AccommodationCard';
import DiningOptions from './ServiceSection/DiningOptionCard';
import SearchPage from './ServiceSection/SearchResults';



const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<Login />} />
          <Route path="services">
            <Route path="route-suggestions" element={<RouteSuggestions />} />
            <Route path="accommodation-recommendations" element={<AccommodationRecommendations />} />
            <Route path="dining-options" element={<DiningOptions />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
