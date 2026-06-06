import { useState } from "react";
import { CounterCard } from "./components/CounterCard";
import "./styles/App.css";

const stats = [
  {label: "Projects", target: 48, suffix: "", duration: 1600, color: "#a78bfa"},
  {label: "Commits", target: 1240, suffix: "", duration: 2000, color: "#34d399"},
  {label: "Clients", target: 36, suffix: "+", duration: 1400, color: "#fb923c"},
  {label: "Hours", target: 9800, suffix: "", duration: 2200, color: "#60a5fa"},
];

export default function App() {
  const [started, setStarted] = useState(false);
  const [key, setKey] = useState(0);

  function replay() {
    setStarted(false);
    setKey(k => k + 1);
    setTimeout(() => setStarted(true), 80);
  }

  return (
    <div className="page">

      <div className="header">
        <p className="header-sub">requestAnimationFrame + React</p>
        <h1 className="header-title">Animated Counter</h1>

        {!started ? (
          <button className="btn-start" onClick={() => setStarted(true)}>
            START →
          </button>
        ) : (
          <button className="btn-replay" onClick={replay}>
            ↺ REPLAY
          </button>
        )}
      </div>

      <div key={key} className="grid">
        {stats.map((s, i) => (
          <CounterCard key={s.label} {...s} started={started} index={i} />
        ))}
      </div>

      <p className="footer">
        useCounter hook · requestAnimationFrame · ease-out-expo
      </p>

    </div>
  );
}