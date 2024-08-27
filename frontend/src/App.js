
import './App.css';

import Layout from './Components/FoodOrdering/FoodLayout';

import FoodHome from './Components/FoodOrdering/FoodHome';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BreakfirstMenu from './Components/FoodOrdering/BreakfirstMenu';
import DinnerMenu from './Components/FoodOrdering/DinnerMenu';
import Pickup from './Components/FoodOrdering/Pickup';
import SelectedFoods from './Components/FoodOrdering/SelectedFoods';
import LunchMenu from './Components/FoodOrdering/LunchMenu';
import BeverageMenu from './Components/FoodOrdering/BeverageMenu';



function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Layout/>}>
          <Route path="/foodhome" element={<FoodHome/>}/>
          <Route path="/breakfirstmenu" element={<BreakfirstMenu/>}/>
          <Route path="/dinnermenu" element={<DinnerMenu/>}/>
          <Route path="/pickup" element={<Pickup/>}/>
          <Route path="/selectedfoods" element={<SelectedFoods/>}/>
          <Route path="/lunchmenu" element={<LunchMenu/>}/>
          <Route path="/beveragemenu" element={<BeverageMenu/>}/>
        </Route>



      </Routes>
    </Router>
  );
}

export default App;
