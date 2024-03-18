import { useState, useEffect } from 'react';
import { getVideos } from '../../helpers/apiRequests';
import useMediaQuery from '../../hooks/useMediaQuery';
import { playerType } from '../../types/players';
import { Video } from '../../types/video';
import { ErrorBoundary } from 'react-error-boundary';
import Skeleton from 'react-loading-skeleton';
import { highlightColor } from '../../helpers/otherVariables';
import EmptyState from '../global/EmptyState';
import VideoPlayer from '../global/VideoPlayer';

const VideoSection = () => {
  const [video, setVideo]: playerType = useState('');
  const [activeVideo, setActiveVideo] = useState<number>(1);
  const [videoData, setVideoData]: [Video[], React.Dispatch<Video[]>] = useState([
    {
      id: -1,
      video: '',
      poster: '',
    },
  ]);

  const widthBounds: boolean = useMediaQuery('(max-width: 750px)');

  useEffect(() => {
    getVideos(setVideoData, setVideo, setActiveVideo);
  }, []);

  return (
    <div className="video-section">
      <div className="container">
        <div className="video-section-inner">
          <h2 className="video-section-title">Видеогалерея</h2>
          {video.length !== 0 ? (
            <ErrorBoundary fallback={<EmptyState />}>
              <VideoPlayer videoUrl={video} />
            </ErrorBoundary>
          ) : (
            <Skeleton
              highlightColor={highlightColor}
              height={'51.2rem'}
              style={{ borderRadius: '0.5rem' }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
