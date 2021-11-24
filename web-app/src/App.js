import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PageOne } from "./PageOne";
import { PageTwo } from "./PageTwo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/job-sources" element={<PageTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
