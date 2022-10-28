// import { AiFillPlayCircle } from 'react-icons/fa';
import { useState } from "react";

const Player = () => {

    const [playState, setPlayState] = useState(true);


    const PlayBackState = () => {
        if (playState) {
            return <i className="bi bi-pause"></i>
        }
        else {
            return <i className="bi bi-play-circle"></i>
        }

    }

    return (
        <div className="PlayerPage">

            <div className="Banner"> Banner</div>
            <div className="RadioInfo"> Radio Information </div>
            <div className="TimerInfo"> 30:00</div>
            <div className="PlaybackFunctionality"

                onClick={()=>setPlayState(!playState)}
            >
                <PlayBackState></PlayBackState>
            </div>
        </div>)
}

export default Player; 