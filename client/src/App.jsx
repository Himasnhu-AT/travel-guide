import React from 'react';
import Footer from "./components/footer";
import Header from "./components/Header";
import FAQ from "./Pages/aboutus";

const App = () => {
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
 
export default App;