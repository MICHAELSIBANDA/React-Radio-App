import React, { useState } from 'react';
import AnimatedHeading from './AnimatedHeading';
import Player from './Player';
import Episode from './Episode';
import './RadioContainer.css';

const RadioContainer = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleEpisodes = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="radio-container">
      <AnimatedHeading title="Plug an Alumni" />
      <div className="music-wave">
        <img src="music-wave.gif" alt="Music Waves" />
      </div>
      <Player />

      <AnimatedHeading title="Other Recent Episodes" />
      <div className="recent-episodes">
        <Episode
          title="Academic Excellence Awards"
          description="Prof MH Maserumule giving a keynote address at the TUT Academic Excellence Awards ceremony for the Department of Humanities held at Maslow Time Square Hotel in Pretoria"
          date="16 OCT"
          duration="17 MIN"
          iframeSrc="https://iframe.iono.fm/e/1491384"
        />

        <div className="animated-heading">
          <button id="view-more-btn" type="button" onClick={toggleEpisodes}>
            {showMore ? 'View Less' : 'View More'}
          </button>
        </div>

        {showMore && (
          <div id="more-episodes">
            <Episode
              title="Dr Tlou Cholo 3rd Annual Legacy Lecture"
              description="Dr Tlou Cholo speaking at his 3rd Annual Legacy Lecture held at Freedom Park in Pretoria on the 11 October 2024"
              date="11 OCT"
              duration="18 MIN"
              iframeSrc="https://iframe.iono.fm/e/1492757?text=27528b"
            />
            <Episode
              title="Another Episode Title"
              description="Description of another episode."
              date="DATE"
              duration="DURATION"
              iframeSrc="https://iframe.iono.fm/e/1492757?text=27528b"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RadioContainer;
