import { useState } from "react";

function ToggleWindow() {
  const [showWindow, setShowWindow] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Toggle Window Page</h2>

      <button onClick={() => setShowWindow(!showWindow)}>
        Toggle Window
      </button>

      {showWindow && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "#e0f7fa",
            borderRadius: "8px",
            display: "inline-block"
          }}
        >
          <h3>This is the Toggle Window 🎉</h3>
          <p>The window appears and disappears when you click the button.</p>
        </div>
      )}

    </div>
  );
}

export default ToggleWindow;