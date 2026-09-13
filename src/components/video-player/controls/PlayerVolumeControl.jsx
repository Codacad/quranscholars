import { Volume1, Volume2, VolumeX } from "lucide-react";
import { MuteButton, VolumeSlider, useMediaState } from "@vidstack/react";

const PlayerVolumeControl = () => {
  const muted = useMediaState("muted");
  const volume = useMediaState("volume");
  const Icon = muted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;
  return <div className="player-volume group/volume"><MuteButton className="player-control-button" aria-label={muted ? "Unmute" : "Mute"}><Icon /></MuteButton><div className="player-volume-slider-wrap"><VolumeSlider.Root className="player-slider player-volume-slider" aria-label="Volume"><VolumeSlider.Track className="player-slider-track"><VolumeSlider.TrackFill className="player-slider-fill" /></VolumeSlider.Track><VolumeSlider.Thumb className="player-slider-thumb" /></VolumeSlider.Root></div></div>;
};

export default PlayerVolumeControl;
