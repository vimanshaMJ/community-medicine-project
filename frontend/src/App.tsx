import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<h1 className="text-2xl"># Community medicine project</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
