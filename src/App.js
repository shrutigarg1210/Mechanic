import "./App.css";
import Navbar from "./components/Navbar";
import About from "./routes/About";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Mechanicform from "./routes/Mechanicform";
import Layout from "./Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Layout>
                <Navbar />
                <h1>Hello</h1>
              </Layout>
            }
          />
          <Route
            path="/home"
            element={
              <Layout>
                <Navbar />
                <h1>Hello</h1>
              </Layout>
            }
          />
          <Route
            path="/Mechanicform"
            element={
              <Layout>
                <Navbar />
                <Mechanicform/>
              </Layout>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
