
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navrbar from "./component/Navbar";
import Formation from "./component/Formation";

function App() {
  return (
    <div>
    <Router>
    <Routes>
   
    <Route path="/" element={<Home/>} />
    <Route path="/formation" element={<Formation/>} />
    </Routes>
        
   
  </Router>
    </div>
  );
}

export default App;
