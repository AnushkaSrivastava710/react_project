import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Armstrong() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const checkArmstrong = () => {
    let number = num;
    let sum = 0;
    let temp = number;

    while (temp > 0) {
      let digit = temp % 10;
      sum += digit * digit * digit;
      temp = Math.floor(temp / 10);
    }

    if (Number(number) === sum) {
      setResult("✅ Armstrong Number");
    } else {
      setResult("❌ Not Armstrong");
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
        <h1>Armstrong Checker ✨</h1>

        <input
          type="number"
          placeholder="Enter number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            marginTop: "10px"
          }}
        />

        <br /><br />

        <button
          onClick={checkArmstrong}
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

export default Armstrong;