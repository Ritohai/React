import { useState } from "react";
import "./App.css";
import Publish from "./components/Publish";
import SearchReview from "./components/SearchReview";

function App() {
  const [comments, setComnments] = useState([]);
  const [divColor, setDivColor] = useState("black");
  return (
    <div className="App body">
      <SearchReview divColor={divColor} setDivColor={setDivColor}/>
      <Publish comment={comments} setComnment={setComnments} />
    </div>
  );
}

export default App;

