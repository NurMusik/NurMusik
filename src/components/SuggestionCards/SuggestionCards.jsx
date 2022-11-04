import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { tags } from '../../utilities/constants';
import { RadioBrowserApi } from 'radio-browser-api';

const SuggestionCard = ({}) => {
  const api = new RadioBrowserApi('My Radio App');
  const [stations, setStations] = useState([]);
  const [intialized, setInitialized] = useState(false);
  let { tags } = useParams();

  useEffect(() => {
    async function getStations() {
      const waiting_stations = await api.searchStations({
        tag: tags,
        limit: 100,
        offset: 0, // this is the default - can be omited
      });
      setStations(waiting_stations);
      setInitialized(true);
    }

    getStations();
  }, [intialized]);

  return stations.map((station) => (
    <div className="card m-1 p-2">
      <Link to={`/player/${station.id}`} state={station.url}>
        <div className="card-body">
          <h5 className="card-text">{station.name}</h5>
        </div>
      </Link>
    </div>
  ));
};

export default SuggestionCard;
