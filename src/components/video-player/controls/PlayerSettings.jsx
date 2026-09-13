import { useEffect, useRef, useState } from "react";
import { Check, ChevronLeft, Gauge, Settings } from "lucide-react";
import { usePlaybackRateOptions, useVideoQualityOptions } from "@vidstack/react";

const PlayerSettings = () => {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState("root");
  const rootRef = useRef(null);
  const rates = usePlaybackRateOptions({ rates: [0.5, 0.75, 1, 1.25, 1.5, 2], normalLabel: "Normal" });
  const qualities = useVideoQualityOptions({ auto: "Auto", sort: "descending" });
  useEffect(() => { if (!open) return undefined; const close = (event) => !rootRef.current?.contains(event.target) && setOpen(false); document.addEventListener("pointerdown", close); return () => document.removeEventListener("pointerdown", close); }, [open]);
  const select = (option, event) => { option.select(event); setOpen(false); setView("root"); };
  return <div ref={rootRef} className="player-settings">
    <button type="button" className="player-control-button" onClick={() => setOpen((value) => !value)} aria-label="Player settings" aria-haspopup="menu" aria-expanded={open}><Settings /></button>
    {open && <div className="player-menu" role="menu">{view === "root" ? <><p className="player-menu-label">Playback settings</p><button type="button" className="player-menu-row" onClick={() => setView("speed")}><Gauge /><span>Speed</span><strong>{rates.find((option) => option.selected)?.label || "Normal"}</strong></button>{!qualities.disabled && <button type="button" className="player-menu-row" onClick={() => setView("quality")}><span className="player-quality-icon">HD</span><span>Quality</span><strong>{qualities.find((option) => option.selected)?.label || "Auto"}</strong></button>}</> : <><button type="button" className="player-menu-back" onClick={() => setView("root")}><ChevronLeft />{view === "speed" ? "Playback speed" : "Video quality"}</button><div className="player-menu-options">{(view === "speed" ? rates : qualities).map((option) => <button key={option.value} type="button" role="menuitemradio" aria-checked={option.selected} className="player-menu-option" onClick={(event) => select(option, event)}><span>{option.label}</span>{option.selected && <Check />}</button>)}</div></>}</div>}
  </div>;
};

export default PlayerSettings;
