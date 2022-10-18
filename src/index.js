import React, { createRoot } from "react-dom/client";
import Head from "./header.js";
import InputSection from "./inputSection.js";
import "./index.css";

const root = React.createRoot(document.querySelector("#root"));

function App() {
  return (
    <div className="body-container">
      <Head />
      <InputSection />
    </div>
  );
}

root.render(<App />);
