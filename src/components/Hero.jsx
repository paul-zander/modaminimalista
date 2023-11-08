import HeroVideo from "../assets/videos/hero-video.mp4";

function Hero() {
  return (
    <div>
      <video
        className="h-screen w-full object-cover"
        src={HeroVideo}
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
}

export default Hero;
