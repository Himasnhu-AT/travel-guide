import React from 'react';
import travelGuideLogo from './travelGuideLogo.jpeg'; // Import your logo image
import Footer from './footer'; // Import Footer component
import Header from './Header'; // Import Header component

        

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow"> {/* Add flex-grow to push footer to the bottom */}
        <Header />
        {/* Main content of your website */}
      </div>
      <Footer className="w-full" />
    </div>
  );
}

export default App;
