import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RadioBrowserApi } from 'radio-browser-api';
import SearchBar from '../SearchBar/SearchBar';

const SuggestionCard = ({}) => {
  const api = new RadioBrowserApi('My Radio App');
  const [stations, setStations] = useState([]);
  const [intialized, setInitialized] = useState(false);
  let { tags } = useParams();

  useEffect(() => {
    async function getStations() {
      const waiting_stations = (
        await api.searchStations({
          tag: tags,
          limit: 1000,
          offset: 0, // this is the default - can be omited
        })
      ).filter((station) => station.name != '');
      setStations(waiting_stations);
      setInitialized(true);
    }
    getStations();
  }, [intialized]);

  return (
    <>
      <SearchBar setStations={setStations} tags={tags} />
      {stations.map((station) => (
        <div key={station.id} className="card m-1 p-2">
          <Link to={`/player/${station.name}`} state={station}>
            <div className="card-body">
              <h5 className="card-text">{station.name}</h5>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default SuggestionCard;
