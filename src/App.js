import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./Search";


// const url = "https://www.omdbapi.com/?s=man&apikey=7e1cc861"; 


function App() {


    
    return (
     <div className="App">
      <div className="heading">
        <h1>HOOKED</h1>
      </div>
      <div className="components">
        <Search/>
      </div>
    </div>
  );
};

export default App;