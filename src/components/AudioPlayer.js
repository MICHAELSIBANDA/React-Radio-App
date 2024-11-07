import React, { useRef, useState } from 'react';

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
      < div id="playPauseButton" onClick={togglePlayPause}>
        
      </div>
    </div>
  );
};

export default AudioPlayer;
