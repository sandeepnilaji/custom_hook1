import "./App.css";
import { useEffect, useState } from "react";
function useTimer(sec) {
  const [time, setTime] = useState();
  useEffect(() => {
    let id = setTimeout(() => {
      setTime(true);
    }, sec * 1000);
    return () => clearTimeout(id);
  });

  return time;
}

function App() {
  const ready = useTimer(5);
  return <div className="App">{ready ? "ready" : "....loading"}</div>;
}

export default App;
