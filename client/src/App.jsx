import React from 'react';
import ReactDOM from 'react-dom';
import DestinationInput from './components/DestinationInput';
import SearchResults from './components/SearchResults';
import RouteCard from './components/RouteCard';
import AccommodationCard from './components/AccommodationCard';
import DiningOptionCard from './components/DiningOptionCard';
import AttractionCard from './components/AttractionCard';
import Hompage from './components/HomePage';


const routeData = [{
  id: 1,
  name: '<NAME1>',
  description: 'This is a great route',
},
{
  id: 2,
  name: '<NAME2>',
  description: 'This is a great route',
},
{
  id: 3,
  name: '<NAME3>',
  description: 'This is a great route',
}
]

const accommodationData = {
  name: '<NAME>',
  description: 'This is a great accommodation',
}

const diningOptionData = {
  name: '<NAME>',
  description: 'This is a great dining option',
}

const attractionData = {
  name: '<NAME>',
  description: 'This is a great attraction',
}

const App = () => {
  return (
    // <div className=' bg-white text-black flex justify-center items-center'>
    //   <h1>Travel Guide</h1>
    //   <DestinationInput />
    //   {/* Pass the actual data or variable to the SearchResults component */}
    //   {/* <SearchResults results={searchResults} /> */}
    //   {/* Similarly, for other components */}
    //   <RouteCard routes={routeData} />
    //   <AccommodationCard accommodation={accommodationData} />
    //   <DiningOptionCard diningOption={diningOptionData} />
    //   <AttractionCard attraction={attractionData} />
    
    // </div>
    <Hompage/>
    
  );
};


// ReactDOM.render(
// <App />, 
// document.getElementById('root'));
 
export default App;