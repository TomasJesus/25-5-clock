import "./Adjust-Time-Component.css";

type Props = {};

function AdjustTime(props: Props) {
  return (
    <div>
      <div className="adjust-container">
        <h3 className="adjust-text">Session</h3>
        <button className="adjust-button">+</button>
        <button className="adjust-button">-</button>
      </div>
      <div className="adjust-container">
        <h3 className="adjust-text">break</h3>
        <button className="adjust-button">+</button>
        <button className="adjust-button">-</button>
      </div>
    </div>
  );
}

export default AdjustTime;
