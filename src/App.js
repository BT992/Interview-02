import "./styles.css";

import { useState } from "react";

function App() {
  return <RobotList />;
}

const RobotList = () => {
  const [robots, setRobots] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputTrim = input.trim();

    if (!inputTrim) return;

    if (robots.includes(inputTrim)) {
      alert("Robot listede bulunmakta!");
      return;
    }
    setRobots([...robots, inputTrim]);
    setInput("");
  };

  const robotRemove = (name) => {
    setRobots(robots.filter((robot) => robot !== name));
  };

  return (
    <div className="robot-input">
      <h1>Robot List</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={input}
          placeholder="Bir Robot Adı Yazınız..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn-style" type="submit">
          Gönder
        </button>
      </form>

      <div className="robot-list">
        {robots.map((robot) => (
          <img
            className="robot-photos"
            src={`https://robohash.org/ ${robot}`}
            alt={robot}
            key={robot}
            onClick={() => robotRemove(robot)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
