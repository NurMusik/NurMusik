import './SuggestionCards.css';

import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RadioBrowserApi } from 'radio-browser-api';
import SearchBar from '../SearchBar/SearchBar';
import '../Home/Home.css'
import { useNavigate, useLocation } from 'react-router-dom'


const SuggestionCard = ({ }) => {
  const api = new RadioBrowserApi('My Radio App');
  const [stations, setStations] = useState([]);
  const [intialized, setInitialized] = useState(false);
  let { tags } = useParams();

  const navigate = useNavigate()



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

  if (!intialized) {
    return (
      <>
        <SearchBar setStations={setStations} tags={tags} />
        <h1>Stations loading...</h1>
      </>
    );
  }

  console.log(stations);

  return (
    <>
      <div className="homePage">
        <div className="Banner">
          <button onClick={() => navigate(-1)}><i className="bi bi-arrow-left"></i></button>

          <h1 className="BannerTitle">NurMusik</h1>
          {/* <i className="bi bi-three-dots"></i> */}
        </div>
        <div className="searchBar"><SearchBar setStations={setStations} tags={tags} /></div>

        <div className="genre-cards-container">

          {stations.map((station) => (
            <div key={station.id} className="card m-1 p-2">
              <Link to={`/player/${station.name}`} state={station}>
                <div className="card-body">
                  <h5 className="card-text">{station.name}</h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SuggestionCard;
