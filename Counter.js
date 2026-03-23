import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Counter() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Colorful Counter</h2>

        <h1 style={styles.number}>{count}</h1>

        <div>
          <button
            style={styles.increment}
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>

          <button
            style={styles.decrement}
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
        </div>

        <br /><br />

        <button onClick={() => navigate("/theme")}>
          Go to Toggle Theme Page
        </button>

      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    background: "rgba(255,255,255,0.9)",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  },

  title: {
    marginBottom: "20px",
    color: "#333",
  },

  number: {
    fontSize: "60px",
    marginBottom: "20px",
    color: "#ff4b2b",
  },

  increment: {
    padding: "12px 20px",
    marginRight: "10px",
    border: "none",
    borderRadius: "6px",
    background: "linear-gradient(45deg, #00c6ff, #0072ff)",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },

  decrement: {
    padding: "12px 20px",
    border: "none",
    borderRadius: "6px",
    background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Counter;