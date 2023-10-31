import "./App.css";
import AdjustTime from "./components/Adjust-time-component";
import Clock from "./components/Clock-component";
import PlayPauseReset from "./components/Play-Pause-reset-component";

function App() {
  return (
    <div className="app-container">
      <div className="clock-container">
        <Clock />
        <Clock />
      </div>
      <div className="control-panel-container">
        <AdjustTime />
        <PlayPauseReset />
      </div>
    </div>
  );
}

export default App;
