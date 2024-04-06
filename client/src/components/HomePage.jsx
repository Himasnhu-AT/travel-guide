import React from "react";
import Footer from "./footer";
import Header from "./Header";
import FAQ from "/Pages/signup";

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

export default App;
