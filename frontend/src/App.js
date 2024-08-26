import logo from './logo.svg';
import './App.css';
import FoodHome from './FoodOrdering/FoodHome';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<FoodHome/>}/>
      </Routes>
    </Router>
  );
}

export default App;
