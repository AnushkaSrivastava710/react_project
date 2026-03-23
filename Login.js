import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    alert("Login Successful!");
    navigate("/counter");
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Welcome </h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
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

  form: {
    background: "rgba(255,255,255,0.9)",
    padding: "40px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    width: "320px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },

  input: {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },

  button: {
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    background: "linear-gradient(45deg, #4facfe, #00f2fe)",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Login;