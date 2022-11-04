import { RadioBrowserApi } from "radio-browser-api";
import { useEffect, useState } from "react";
import { tags } from "../../utilities/constants";
import SuggestionCard from "../SuggestionCards/SuggestionCards";
import "./Home.css";

const Home = () => {
  const api = new RadioBrowserApi("My Radio App");
  const [stations, setStations] = useState([]);
  const [intialized, setInitialized] = useState(false);

  const [selectedGenre, setGenre] = useState(tags[0]);
  async function getStations() {
    const waiting_stations = await api.searchStations({
      countryCode: "US",
      tag: selectedGenre,
      limit: 100,
      offset: 0, // this is the default - can be omited
    });
    setStations(waiting_stations);
    setInitialized(true);
  }

  useEffect(() => {
    getStations();
  }, [intialized]);

  return (
    <div className="genre-cards-container">
      {tags.map((genre, idx) => (
        <div key={idx} className="genre-card">
          {genre.at(0).toUpperCase() + genre.slice(1)}
        </div>
      ))}

      {stations.map((station) => (
        <SuggestionCard key={station.id} station={station}></SuggestionCard>
      ))}
    </div>
  );
};
export default Home;
