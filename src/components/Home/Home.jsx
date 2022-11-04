import { RadioBrowserApi } from "radio-browser-api";
import { useEffect, useState } from "react";
import { tags } from "../../utilities/constants";
import SuggestionCard from "../SuggestionCards/SuggestionCards";
import { useNavigate } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const goToPosts = (tags) =>
    navigate({
      pathname: `/genres/${tags}`,
    });

  return (
    <div className="genre-cards-container">
      {tags.map((genre, idx) => (
        <button key={idx} className="genre-card" onClick={()=>goToPosts(genre)}>
          {genre.at(0).toUpperCase() + genre.slice(1)}
        </button>
      ))}

    </div>
  );
};
export default Home;
