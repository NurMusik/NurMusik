import { Link, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { tags } from "../../utilities/constants";
import { RadioBrowserApi } from "radio-browser-api";

const SuggestionCard = ({}) => {
  const api = new RadioBrowserApi("My Radio App");
  const [stations, setStations] = useState([]);
  const [intialized, setInitialized] = useState(false);
  let { tags } = useParams();

  useEffect(() => {
    async function getStations() {
      const waiting_stations = await api.searchStations({
        countryCode: "US",
        tag: tags,
        limit: 100,
        offset: 0, // this is the default - can be omited
      });
      setStations(waiting_stations);
      setInitialized(true);
    }

    getStations();
  }, [intialized]);

    return(
      stations.map((station) => (
        <div className="card m-1 p-2">
          <div className="card-body">
            <h5 className="card-title">{station.id}</h5>
            <p className="card-text">{station.name}</p>
            <Link to="/audioPlayer" state={station.url}>Link</Link>
          </div>
        </div>
      ))
    )
};

export default SuggestionCard;