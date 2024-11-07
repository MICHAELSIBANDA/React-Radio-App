import React from 'react';

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

export default Episode;
