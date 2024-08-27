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


import ManagerSignin from './Components/ManagerComponent/ManagerSignin';
import ManagerSignUp from './Components/ManagerComponent/ManagerSignUp';
import Product from './Components/ItemComponent/product';
import ItemDetails from './Components/ItemComponent/Itemdetails';
import UpdateItem from './Components/ItemComponent/UpdateItem';
import ItemRepoart from './Components/ItemComponent/ItemRepoart';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<ManagerSignin />} />
          <Route path="/add-manager" element={<ManagerSignUp />} />
          <Route path="/add-item" element={<Product />} />
          <Route path="/itemdetails" element={<ItemDetails />} />
          <Route path="/itemupdate/:id" element={<UpdateItem />} />
          <Route path="/itemrepoart" element={<ItemRepoart />} />


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
    </div>
  );
}

export default App;
