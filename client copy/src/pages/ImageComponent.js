import React, { useState, useEffect } from "react";

const ImageComponent = ({ videoPath, duration, onTimeout }) => {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false);
      onTimeout(); // Call a callback function when the timeout occurs
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onTimeout]);

  return (
    <div>
      {showVideo && (
        <video
          src={videoPath}
          alt="Temporary Video"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
          autoPlay
          muted
          loop
        />
      )}
    </div>
  );
};

export default ImageComponent;
