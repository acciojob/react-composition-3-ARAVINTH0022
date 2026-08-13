import React from "react";
import Tooltip from "./Tooltip";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main" style={{ padding: "50px", textAlign: "center" }}>
      {/* Do not remove the main div */}
      <Tooltip text="This is a tooltip">
        <h2>Hover over me</h2>
      </Tooltip>
      <br /><br />
      <Tooltip text="This is another tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
};

export default App;
