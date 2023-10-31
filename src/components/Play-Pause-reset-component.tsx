import "./Play-Pause-reset-component.css";

type Props = {};

function PlayPauseReset(props: Props) {
  return (
    <div className="play-pause-reset-container">
      <button className="play-pause-button">
        <i className="bi bi-play"></i>
        <i className="bi bi-pause"></i>
      </button>
      <button className="reset-button">reset</button>
    </div>
  );
}

export default PlayPauseReset;
