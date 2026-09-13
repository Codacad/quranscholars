import { Pause, Play, RotateCcw } from "lucide-react";
import { PlayButton, useMediaState } from "@vidstack/react";

const PlayerPlayButton = ({ large = false }) => {
  const paused = useMediaState("paused");
  const ended = useMediaState("ended");
  return (
    <PlayButton className={large ? "player-center-button" : "player-control-button"} aria-label={ended ? "Replay video" : paused ? "Play video" : "Pause video"}>
      {ended ? <RotateCcw /> : paused ? <Play className="translate-x-px fill-current" /> : <Pause className="fill-current" />}
    </PlayButton>
  );
};

export default PlayerPlayButton;
