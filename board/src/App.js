import "./App.css";

import Write from "./routes/write.js";
import Edit from "./routes/edit.js";
import Detail from "./routes/detail.js";
import Login from "./routes/login.js";
import Register from "./routes/register.js";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home.js";
import MyNavbar from "components/Navbar";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
