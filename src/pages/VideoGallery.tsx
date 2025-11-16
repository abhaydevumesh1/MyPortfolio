const videos = [
  "https://www.youtube.com/embed/by1iBAC9mnE",
  "https://www.youtube.com/embed/veto8JH4H-Y"
];

const VideoGallery = () => (
  <section className="section">
    <h2 className="video-title">🎓 Video Gallery</h2>
    <div className="video-gallery">
      {videos.map((video, index) => (
        <iframe
          key={index}
          width="300"
          height="200"
          src={video}
          title={`video-${index}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  </section>
);

export default VideoGallery;
