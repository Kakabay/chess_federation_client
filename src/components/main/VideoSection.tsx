import { useState, useEffect } from "react";
import { getVideos } from "../../helpers/apiRequests";
import useMediaQuery from "../../hooks/useMediaQuery";
import { playerType } from "../../types/players";
import { Video } from "../../types/video";
import { ErrorBoundary } from "react-error-boundary";
import Skeleton from "react-loading-skeleton";
import { highlightColor } from "../../helpers/otherVariables";
import EmptyState from "../global/EmptyState";
import VideoPlayer from "../global/VideoPlayer";
import { hosting } from "../../links";

const VideoSection = () => {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string>();
  const [videoData, setVideoData]: [Video[], React.Dispatch<Video[]>] =
    useState([
      {
        id: -1,
        video: "",
        poster: "",
      },
    ]);

  const widthBounds: boolean = useMediaQuery("(max-width: 750px)");

  useEffect(() => {
    getVideos(setVideoData, setActiveVideoUrl);
  }, []);

  return (
    <div className="video-section">
      <div className="container">
        <div className="video-section-inner">
          <h2 className="video-section-title">Видеогалерея</h2>
          {activeVideoUrl && videoData.length > 0 ? (
            <ErrorBoundary fallback={<EmptyState />}>
              {videoData.map((video) =>
                video.video === activeVideoUrl ? (
                  <VideoPlayer
                    videoUrl={activeVideoUrl}
                    poster={video.poster}
                  />
                ) : null
              )}
            </ErrorBoundary>
          ) : (
            <Skeleton
              highlightColor={highlightColor}
              height={"51.2rem"}
              style={{ borderRadius: "0.5rem" }}
            />
          )}
          <div className="video-section-videos">
            {videoData.map((video) =>
              activeVideoUrl !== video.video ? (
                <div
                  className="videos-item"
                  onClick={() => setActiveVideoUrl(video.video)}
                >
                  <div className="video-overlay">
                    <h3>Название видео</h3>
                  </div>
                  <img src={hosting + video.poster} alt={"video"} />
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
