import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Palindrome() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const checkPalindrome = () => {
    const cleanText = text.toLowerCase();
    const reversed = cleanText.split("").reverse().join("");

    if (cleanText === reversed) {
      setResult("✅ It's a Palindrome!");
    } else {
      setResult("❌ Not a Palindrome");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0f2027, #2c5364, #00c9ff, #ff00cc, #333399)",
        backgroundSize: "500% 500%",
        animation: "aurora 12s ease infinite",
        color: "white"
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "30px",
          borderRadius: "15px",
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(10px)"
        }}
      >
        <h1>Palindrome Checker ✨</h1>

        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            marginTop: "10px"
          }}
        />

        <br /><br />

        <button
          onClick={checkPalindrome}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            border: "none",
            background: "#00f2fe",
            color: "black",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Check
        </button>

        <p style={{ marginTop: "15px" }}>{result}</p>

        <button
          onClick={() => navigate("/theme")}
          style={{
            marginTop: "10px",
            padding: "8px 16px",
            borderRadius: "10px",
            border: "none",
            background: "white",
            cursor: "pointer"
          }}
        >
          Back
        </button>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes aurora {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }
        `}
      </style>
    </div>
  );
}

export default Palindrome;