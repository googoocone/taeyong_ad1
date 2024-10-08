// components/YouTubeEmbed.js
import React from 'react';

const Youtube = () => {
  
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        src={`https://www.youtube.com/embed/DKJGyFxlMRw?autoplay=1&mute=1`}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
        
      ></iframe>
    </div>
  );
};

export default Youtube;
