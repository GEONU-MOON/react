import "./App.css";

import Write from "./pages/write.js";
import Edit from "./pages/edit.js";
import Detail from "./pages/detail.js";
import Login from "./pages/login.js";
import Register from "./pages/register.js";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home.js";
import MyNavbar from "components/Navbar";
import ProtectedRoute from "store/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/write" element={<Write />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
