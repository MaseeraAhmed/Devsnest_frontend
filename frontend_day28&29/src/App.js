import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GetName from "./components/GetName";
import GetCard from "./components/GetCard";

function App() {
  return (
    <div className="App">
      <GetName />
      <GetCard />
    </div>
  );
}

export default App;
