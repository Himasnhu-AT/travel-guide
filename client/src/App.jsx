import React from 'react';
import ReactDOM from 'react-dom';
import DestinationInput from './components/DestinationInput';
import SearchResults from './components/SearchResults';
import RouteCard from './components/RouteCard';
import AccommodationCard from './components/AccommodationCard';
import DiningOptionCard from './components/DiningOptionCard';
import AttractionCard from './components/AttractionCard';
import Hompage from './components/HomePage';
import Footer from "./footer";
import Header from "./Header";
import FAQ from "/Pages/signup";



const App = () => {
  return (
    
    function App() {
      return (
        <div className="flex flex-col min-h-screen">
          <Header />
    
          <div className="flex-grow">
            <FAQ />
          </div>
    
          <div className="w-full">
            <Footer />
          </div>
        </div>
      );
    }
    
   
    
  );
};



 
export default App;