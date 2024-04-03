

import React from 'react';
import ReactDOM from 'react-dom';
import DestinationInput from './components/DestinationInput';
import SearchResults from './components/SearchResults';
import RouteCard from './components/RouteCard';
import AccommodationCard from './components/AccommodationCard';
import DiningOptionCard from './components/DiningOptionCard';
import AttractionCard from './components/AttractionCard';


const App = () => {
  return (
    <div>
      <h1>Travel Guide</h1>
      <DestinationInput />
      {/* Pass the actual data or variable to the SearchResults component */}
      <SearchResults results={searchResults} />
      {/* Similarly, for other components */}
      <RouteCard route={routeData} />
      <AccommodationCard accommodation={accommodationData} />
      <DiningOptionCard diningOption={diningOptionData} />
      <AttractionCard attraction={attractionData} />
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));
