import { Link } from "react-router-dom";

const SuggestionCard = ({station}) => {
    return(
    <div className="card m-1 p-2">
    <div className="card-body">
      <h5 className="card-title">{station.id}</h5>
      <p className="card-text">{station.name}</p>
      <Link to="/audioPlayer" state={station.url}>Link</Link>
    </div>
  </div>);
};

export default SuggestionCard;