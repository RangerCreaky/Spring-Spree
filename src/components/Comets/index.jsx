import "./style.scss";

const METEOR_COUNT = 30;

export default function Comets() {
  return (
    <div className="comets-wrapper">
      <div className="night">
        {Array(METEOR_COUNT)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="shooting_star"></div>
          ))}
      </div>
    </div>
  );
}
