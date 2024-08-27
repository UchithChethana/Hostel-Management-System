import logo from './logo.svg';
import './App.css';
import FoodHome from './FoodOrdering/FoodHome';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BreakfirstMenu from './FoodOrdering/BreakfirstMenu';
import DinnerMenu from './FoodOrdering/DinnerMenu';
import Checkouts from './FoodOrdering/Checkouts';
import SelectedFoods from './FoodOrdering/SelectedFoods';
import LunchMenu from './FoodOrdering/LunchMenu';
import BeverageMenu from './FoodOrdering/BeverageMenu';



function App() {
  return (
    <Router>
      <Routes>

        <Route path="/foodhome" element={<FoodHome/>}/>
        <Route path="/breakfirstmenu" element={<BreakfirstMenu/>}/>
        <Route path="/dinnermenu" element={<DinnerMenu/>}/>
        <Route path="/checkouts" element={<Checkouts/>}/>
        <Route path="/selectedfoods" element={<SelectedFoods/>}/>
        <Route path="/lunchmenu" element={<LunchMenu/>}/>
        <Route path="/beveragemenu" element={<BeverageMenu/>}/>




      </Routes>
    </Router>
  );
}

export default App;
