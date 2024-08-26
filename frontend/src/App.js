import logo from './logo.svg';
import './App.css';
import FoodHome from './FoodOrdering/FoodHome';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BreakfirstMenu from './FoodOrdering/BreakfirstMenu';
import DinnerMenu from './FoodOrdering/DinnerMenu';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/foodhome" element={<FoodHome/>}/>
        <Route path="/breakfirstmenu" element={<BreakfirstMenu/>}/>
        <Route path="/dinnermenu" element={<DinnerMenu/>}/>

      </Routes>
    </Router>
  );
}

export default App;
