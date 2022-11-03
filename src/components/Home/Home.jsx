import { useState } from "react";
import { Link } from "react-router-dom";
import { RadioBrowserApi, StationSearchType } from "radio-browser-api";
import SuggestionCard from "../SuggestionCards/SuggestionCards";

const Home = () => {
  const api = new RadioBrowserApi("My Radio App");

  // query stations by country code and limit to first 100 stations

//   const [stations, setStations] = useState();
  const [selectedUrl, setSelectedUrl] = useState(''); 
  const [selectedStation, setSelectedStation] = useState(''); 

  async function getStations() {
 
    const stations = await api.searchStations({
          countryCode: "US",
          limit: 5,
          offset: 0, // this is the default - can be omited
        });
    
    setSelectedUrl(stations[4].url)
    setSelectedStation(stations[4]);
    console.log(stations[4]);
    // console.log(stations[4].url)
  }

  async function getTopStationsByType (type, number) {
    const stations = await api.searchStations({
      countryCode: "US",
      limit: number,
      tag: type,
      offset: 0, // this is the default - can be omited
    });
    return stations; 
  }
  
  getStations(); 
//   console.log("SelectedUrl", selectedUrl)

  return (
    <div>
      <Link to="/audioPlayer" state={selectedUrl}>Radio Link</Link>
      <SuggestionCard station={selectedStation}></SuggestionCard>
    </div>
  );
};
export default Home;
