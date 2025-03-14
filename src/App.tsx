import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import OrgChart from "./components/OrgChart/OrgChart";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OrgChart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
