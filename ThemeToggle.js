import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [showWindow, setShowWindow] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: darkMode
          ? "linear-gradient(135deg,#0f2027,#203a43,#2c5364)"
          : "linear-gradient(135deg,#a8edea,#fed6e3)",
        color: darkMode ? "white" : "black",
        transition: "all 0.5s ease"
      }}
    >
      <h1>HOME PAGE </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: "12px 25px",
          fontSize: "16px",
          borderRadius: "20px",
          border: "none",
          cursor: "pointer",
          background: "cyan",
          fontWeight: "bold",
          marginBottom: "20px"
        }}
      >
        Toggle Theme
      </button>

      <button
        onClick={() => setShowWindow(!showWindow)}
        style={{
          padding: "10px 20px",
          borderRadius: "15px",
          border: "none",
          background: "orange",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Toggle Window
      </button>

      {/* Palindrome */}
      <button
        onClick={() => navigate("/palindrome")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "15px",
          border: "none",
          background: "limegreen",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Go to Palindrome
      </button>

      {/* ✅ Armstrong */}
      <button
        onClick={() => navigate("/armstrong")}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          borderRadius: "15px",
          border: "none",
          background: "purple",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Go to Armstrong
      </button>

      {showWindow && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: darkMode ? "#1e1e1e" : "white",
            color: darkMode ? "white" : "black",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
          }}
        >
          <h3>Hello 👋</h3>
          <p>This is the Toggle Window.</p>
        </div>
      )}
    </div>
  );
}

export default ThemeToggle;