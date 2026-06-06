import {useCounter} from "../useCounter";

export function CounterCard({label, target, suffix, duration, color, started, index}) {
  const count = useCounter(target, duration, started);
  const isMax = count === target;

  return (
    <div className="card" style={{animationDelay: `${index * 0.1}s`}}>

      <div
        className="card-glow"
        style={{
          background: `radial-gradient(ellipse at center, ${color}12 0%, transparent 70%)`,
          opacity: isMax ? 1 : 0,
        }}
      />

      <span className="card-number" style={{color}}>
        {count.toLocaleString()}{suffix}
      </span>

      <span className="card-label">{label}</span>

      <div
        className="card-bar"
        style={{
          width: `${(count / target) * 100}%`,
          background: color,
        }}
      />
    </div>
  );
}