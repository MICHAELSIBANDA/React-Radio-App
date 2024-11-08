import React, { useState, useRef } from 'react';
import './FinalRadio.css';

const AnimatedHeading = ({ title }) => {
  return (
    <div className="animated-heading">
      <h1>{title}</h1>
    </div>
  );
};

const Episode = ({ title, description, date, duration, iframeSrc }) => {
  return (
    <div className="episode">
      <div className="episode-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <small>{`${date} • ${duration}`}</small>
      </div>
      <iframe src={iframeSrc} width="100%" height="126" loading="lazy" referrerPolicy="origin" frameBorder="0"></iframe>
    </div>
  );
};

const AudioPlayer = () => {
  const audioPlayerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const audioPlayer = audioPlayerRef.current;
    if (isPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player">
      <audio ref={audioPlayerRef} id="audioPlayer" src="https://example.com/audio-file.mp3" />
      <div id="playPauseButton" onClick={togglePlayPause}></div>
    </div>
  );
};

const Player = () => {
  return (
    <div className="main-player">
      <div className="header">
        <img src="tut-fm-logo.jpg" alt="TUT FM Logo" className="logo" />
        <div className="main-title">
          <h1 className="title">Dr Tlou Cholo 3rd Annual Legacy Lecture</h1>
          <p>Dr Tlou Cholo speaking at his 3rd Annual Legacy Lecture held at Freedom Park in Pretoria on the 11 October 2024</p>
          <p><small>11 OCT • ENGLISH • SOUTH AFRICA • COMEDY INTERVIEWS</small></p>
        </div>
      </div>
      <AudioPlayer />
      <div className="player">
        <iframe src="https://iframe.iono.fm/e/1492757?text=27528b" width="100%" height="126" loading="lazy" referrerPolicy="origin" frameBorder="0"></iframe>
      </div>
    </div>
  );
};

const FinalRadio = () => {
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
              title="Prince Wako Pitori Leaving TUT FM, Beef with Karabo Madder, Marrying Young, and Poetry"
              description="In this episode, Prince Wako Pitori talks about leaving TUT FM, his beef with Karabo Madder, his thoughts on marrying young, and his love for poetry."
              date="29 April 2021"
              duration="1h06m03s"
              iframeSrc="https://open.spotify.com/embed/episode/5TLiURzpySjC18nebH06qI?utm_source=generator&theme=0"
            />
            <Episode
              title="PLUG-A-GRADUATE with Nokuthula Makhanya | How to Get into the Job Market #letsplugyou"
              description="In this episode, Nokuthula Makhanya shares valuable insights and tips on entering the job market."
              date="29 April 2021"
              duration="1h08m38s"
              iframeSrc="https://www.youtube.com/embed/Du4sWRwBmOU?si=KcPL0ifo56STsnZv"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FinalRadio;
