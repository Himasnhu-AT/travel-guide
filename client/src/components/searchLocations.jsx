import React, { useState } from "react";

const SearchLocations = ({ searchQuery, onSearchChange }) => {
  const [location, setLocation] = useState([
    "Rohtang Pass: A breathtaking high mountain pass with stunning views of the Himalayas, glaciers and snow-covered peaks. Enjoy snow activities, such as skiing and snowmobiling, during the winter months.",
    "Solang Valley: A picturesque valley known for its lush green meadows, towering peaks, and adventure activities. Engage in paragliding, zorbing, and skiing amidst the scenic surroundings.",
    "Manali Gompa: A serene Buddhist monastery offering a peaceful retreat. Admire the intricate architecture, colorful prayer flags, and panoramic views of the valley from its courtyard.",
    "Hadimba Devi Temple: An ancient wooden temple dedicated to the goddess Hadimba, nestled amidst towering cedar trees. Explore its intricate carvings and immerse yourself in the spiritual ambiance.",
    "Vashisht Hot Water Springs: Relax and rejuvenate in natural hot springs believed to possess therapeutic properties. Enjoy a dip in the warm, mineral-rich waters surrounded by picturesque landscapes.",
    "Bhrigu Lake: Embark on a moderate trek to this pristine alpine lake situated at an altitude of 4,300 meters. Marvel at its crystal-clear waters and enjoy breathtaking views of the surrounding mountains.",
  ]);
  const [foods, setFood] = useState([
    "Siddu: A traditional steamed bun filled with walnuts, jaggery, and spices. Savor its sweet and savory flavors, often paired with a dollop of butter.",
    "Thukpa: A hearty Tibetan noodle soup brimming with vegetables, meat, and flavorful broth. Warm yourself up with this comforting dish on chilly evenings.",
    "Trout Fish: Freshly caught trout prepared in various styles, including grilled, fried, or steamed. Delight in its flaky texture and delicate taste.",
    "Momos: Succulent steamed dumplings filled with vegetables or meat. Dip them in spicy chutney or savor them plain for a delectable snack.",
    "Kullu Trout: A local delicacy consisting of trout fish seasoned with aromatic spices and cooked to perfection. Relish its unique flavor profile and tender texture.",
    "Yak Cheese: A traditional Himalayan cheese made from yak milk. Experience its distinct nutty and slightly tangy flavor.",
  ]);
  const [shopping, setShopping] = useState([
    " The Mall Road: A bustling pedestrianized street lined with shops, restaurants, and cafes. Browse for souvenirs, handicrafts, and local products while enjoying the vibrant atmosphere.",
    "Manu Market: A vibrant local market offering a wide range of goods, from fresh produce and spices to clothing and souvenirs. Immerse yourself in the local culture and haggle for the best prices.",
    "Tibetan Market: Discover an array of Tibetan handicrafts, artifacts, and souvenirs. Find unique items such as prayer flags, singing bowls, and traditional jewelry.",
    "Old Manali Market: Explore a bohemian market known for its hippie vibes and eclectic offerings. Browse through colorful clothing, handmade accessories, and local crafts.",
  ]);

  const fetchData = async () => {
    console.log("starting...");
    try {
      const response = await fetch(
        "http://localhost:4000/get-tourist-attraction/aidemo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            location: searchQuery,
          }),
        }
      );
      const jsonData = await response.json();
      setLocation(jsonData.locations);
      setFood(jsonData.foods);
      setShopping(jsonData.shopping);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="">
      <div className=" w-full flex flex-col items-center justify-center space-y-3">
        <input
          id="search"
          type="text"
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Location Name, state"
          className="p-3 border rounded-full border-black focus:border-blue-300"
          required
        />
        <button
          onClick={handleSubmit}
          className="text-xl inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow-lg hover:bg-primary/90"
        >
          <p className="mx-5">Submit</p>
        </button>
      </div>

      <div>
        <h2 className="text-2xl">Locations:</h2>
        <ul className="">
          {location.map((al) => (
            <li key={al}>{al}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl">Foods:</h2>
        {foods.map((al) => (
          <div key={al}>{al}</div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl">Shopping:</h2>
        {shopping.map((al) => (
          <div key={al}>{al}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchLocations;
