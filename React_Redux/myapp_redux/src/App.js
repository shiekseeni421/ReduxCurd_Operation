import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Add from "./Pages/Add";
import Update from "./Pages/Update";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Edit" element={<Update />} />
      </Routes>
    </>
  );
}
export default App;
