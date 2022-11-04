import { useState } from "react";
import { Link } from "react-router-dom";
import { RadioBrowserApi, StationSearchType } from "radio-browser-api";
import SuggestionCard from "../SuggestionCards/SuggestionCards";
import { useEffect } from "react";

const Home = () => {
  const api = new RadioBrowserApi("My Radio App");
  const [stations, setStations] = useState([]);
  const [intialized, setInitialized] = useState(false);
  
  const genres = [ 'piano', 'jazz', 'classic','rock']
  const [selectedGenre, setGenre] = useState(genres[0])
  async function getStations() {
    const waiting_stations = await api.searchStations({
      countryCode: "US",
      //tag: selectedGenre, 
      limit: 100,
      offset: 0, // this is the default - can be omited
    });
    setStations(waiting_stations);
    setInitialized(true)
  }

  useEffect(() => {getStations()}, [intialized]); 
  const tags = stations.map(station => station.tags)
  console.log(tags)

  return (
    <div>

      {genres.map((genre) => <button>{genre}</button> )}
    
      {stations.map((station) => (
        <SuggestionCard station={station}></SuggestionCard>
      ))}
    </div>
  );
};
export default Home;
