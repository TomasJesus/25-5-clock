import "./Clock-Component.css";

type Props = {};

function Clock(props: Props) {
  return (
    <div className="clock">
      <h3 className="clock-name">session</h3>
      <p className="clock-time">25:00</p>
    </div>
  );
}

export default Clock;
