import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const LottiePlayer = ({ lottieJson }) => {
  return (
    <div>
      <Player
        src={lottieJson} // Pass your Lottie JSON here
        loop
        autoplay
        style={{ width: "100%", height: "100%" }} // Set dimensions as needed
      >
        <Controls /> {/* Optional: Show playback controls */}
      </Player>
    </div>
  );
};

export default LottiePlayer;
