import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Componentes/Header";

function App() {
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
