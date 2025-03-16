import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";
import "./styles/main.scss";

function App() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route index element={<Resources category="html" />} />
        <Route path="/html" element={<Resources category="html" />} />
        <Route path="/css" element={<Resources category="css" />} />
        <Route path="/javascript" element={<Resources category="javascript" />} />
        <Route path="/react" element={<Resources category="react" />} />
        <Route path="/sanity" element={<Resources category="headless-cms" />} />
      </Routes>
    </Router>
  );
}

export default App;
