import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReviewOrder from "./components/ReviewOrder/ReviewOrder";


function App() {
  return (
    <div className="main">
      <Router>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Shop />}>
            <Route path="shop" element={<Shop />}></Route>
          </Route>
          <Route path="/review-order" element={<ReviewOrder />}></Route>
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
