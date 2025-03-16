import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //routing
import Layout from "./components/Layout"; //importerer layout
import Resources from "./components/Resources"; //importerer ressirser
import "./styles/main.scss"; //importerer scss

function App() {
  return (
    <Router>
      <Layout /> {/* visr nav meny */}
      <Routes> {/* ruter som laster riktig kategori fra ressursene */}
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

export default App; //eksporterer app
