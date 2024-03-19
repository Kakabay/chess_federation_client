// Modules
import ReactPlayer from "react-player/lazy";
import { hosting } from "../../links";

// Components
import PlayIcon from "./PlayIcon";
import { useState } from "react";

// Types
interface Props {
  videoUrl: string;
  poster: string;
}

const VideoPlayer = ({ videoUrl, poster }: Props) => {
  const [videoIsPlaying, setVideoIsPLaying] = useState<boolean>(false);

  return (
    <div className="player">
      {!videoIsPlaying && (
        <div className="video-overlay">
          <h3>Название видео</h3>
        </div>
      )}
      <ReactPlayer
        url={hosting + videoUrl}
        controls
        onPlay={() => setVideoIsPLaying(true)}
        onPause={() => setVideoIsPLaying(false)}
        playing={true}
        playIcon={videoUrl.length > 0 ? <PlayIcon /> : undefined}
        volume={1}
        height={"100%"}
        width={"100%"}
        light={hosting + poster}
        className="video-player"
      />
    </div>
  );
};

export default VideoPlayer;
