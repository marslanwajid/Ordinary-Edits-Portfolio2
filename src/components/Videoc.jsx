import React from 'react';
import ReactPlayer from 'react-player';

function LocalVideoPlayer() {
  return (
    <div>
      <ReactPlayer url={'<iframe width="100%" height="515" src="https://www.youtube.com/embed/fA-NEh2t-A4?si=pHoxdx2z4cz5N8-Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'} controls={true} />
    </div>
  );
}

export default LocalVideoPlayer;