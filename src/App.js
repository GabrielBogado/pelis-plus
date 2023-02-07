import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Componentes/Header/Header.jsx";

function App() {
  fetch("https://api.fbi.gov/wanted/v1/list")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
