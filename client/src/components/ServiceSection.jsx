import React from 'react';
import AccommodationCard from '../ServiceSections/AccommodationCard';
import AttractionCard from '../ServiceSections/AttractionCard';
import DestinationInput from '../ServiceSections/DestinationInput';
import DiningOptionCard from '../ServiceSections/DiningOptionCard';
import RouteCard from '../ServiceSections/RouteCard';
import SearchResults from '../ServiceSections/SearchResults';
import UserGuide from '../ServiceSections/userGuide';
import DestinationGuides from "../FeaturesSection/DestinationGuidesPage";

const ServiceSection = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <div className="flex flex-wrap justify-center">
        {/* Import and render each card component */}
        <AccommodationCard />
        <AttractionCard />
        <DestinationInput />
        <DiningOptionCard />
        <RouteCard />
        <SearchResults />
        <UserGuide />
        <DestinationGuides/>
      </div>
    </div>
  );
}

export default ServiceSection;
