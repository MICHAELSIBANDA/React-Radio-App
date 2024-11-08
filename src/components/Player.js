import React from 'react';
import AudioPlayer from './AudioPlayer';

const Player = () => {
  return (
    <div className="main-player">
      <div className="header">
        <img src="tut-fm-logo.jpg" alt="TUT FM Logo" className="logo" />
        <div className="main-title">
          <h1 className="title">Dr Tlou Cholo 3rd Annual Legacy Lecture</h1>
          <p>Dr Tlou Cholo speaking at his 3rd Annual Legacy Lecture held at Freedom Park in Pretoria on the 11 October 2024</p>
          <p><small>11 OCT • ENGLISH • SOUTH AFRICA • COMEDY INTERVIEWS • COMEDY INTERVIEWS</small></p>
        </div>
      </div>
      <AudioPlayer />
      <div className="player">
        <iframe src="https://iframe.iono.fm/e/1492757?text=27528b" width="100%" height="126" loading="lazy" referrerPolicy="origin" frameBorder="0"></iframe>
      </div>
    </div>
  );
};

export default Player;
