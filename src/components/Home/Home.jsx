import { useState } from "react";
import { Link } from "react-router-dom";
import { RadioBrowserApi, StationSearchType } from "radio-browser-api";

const Home = () => {
  const api = new RadioBrowserApi("My Radio App");

  // query stations by country code and limit to first 100 stations

//   const [stations, setStations] = useState();
  const [selectedUrl, setSelectedUrl] = useState(''); 

  async function getStations() {
 
    const stations = await api.searchStations({
          countryCode: "US",
          limit: 5,
          offset: 0, // this is the default - can be omited
        });
    
    setSelectedUrl(stations[4].url)
    // console.log(stations[4].url)
  }
  
  getStations(); 
//   console.log("SelectedUrl", selectedUrl)

  return (
    <div>
      <Link to="/audioPlayer" state={selectedUrl}>Radio Link</Link>
    </div>
  );
};
export default Home;
