import "./styles.css";
import { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  const [animProgress, setAnimProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimProgress(progress), 100);
  }, []);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          // width: `${progress}%`,
          transform: `translateX(${animProgress - 100}%)`,
          color: animProgress > 5 ? "white" : "black",
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax="100"
        aria-valuemin="0"
      >
        {progress}%
      </div>
    </div>
  );
};

export default function App() {
  const bars = [0, 5, 10, 20, 30, 50, 70, 90];

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {bars.map((value) => (
        <ProgressBar key={value} progress={value} />
      ))}
    </div>
  );
}
