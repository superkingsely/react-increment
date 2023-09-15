import React, { useState } from "react";

const App = () => {
    const[count,setCount]=useState(0)
    const handleincrement=()=>{
        setCount(prev=>prev + 1)
    }
  return (
    <div
      className="app"
      style={{ minHeight: "100vh", backgroundColor: "yellow" }}
    >
      <br />
      <div className="container" style={{border:'2px solid'}}>
        <div className="screen" style={{ backgroundColor: "gray" }}>
          <h1>{count}</h1>
        </div>
        <div className="action">
          <button onClick={()=>{setCount(0)}}>refresh</button>
          <button onClick={()=>{setCount(prev=>prev -1)}}>Drecrement</button>
          <button
          onClick={handleincrement}
          >increment</button>
        </div>
      </div>
    </div>
  );
};

export default App;
