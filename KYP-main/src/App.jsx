import { useState } from "react";
import Navbar from "./components/Navbar";
import Classification from "./pages/Classification";
import Home from "./pages/Home";
import Flowcharts from "./pages/Flowcharts";
import Updates from "./pages/Updates";
import Errors from "./pages/Errors";
import { Route, Routes } from "react-router-dom";
import Links from "./pages/Links";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import MainPage from "./pages/MainPage";
import Query from "./pages/Query";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  console.log(authenticated);
  return (
    <>
      <div>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage setAuthenticated={setAuthenticated} />}
          />
          {/* <Route element={<ProtectedRoute authenticated={authenticated} />}> */}
          <Route path="/" element={<MainPage />}>
            <Route path="/" element={<Home />} />
            <Route path="/classification" element={<Classification />} />
            <Route path="/flowcharts" element={<Flowcharts />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/errors" element={<Errors />} />
            <Route path="/links" element={<Links />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/query" element={<Query />} />
          </Route>
          {/* </Route> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
