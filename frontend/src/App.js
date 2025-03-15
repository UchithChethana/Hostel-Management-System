import './App.css';

import Layout from './Components/FoodOrdering/FoodLayout';

import FoodHome from './Components/FoodOrdering/FoodHome';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BreakfirstMenu from './Components/FoodOrdering/BreakfirstMenu';
import DinnerMenu from './Components/FoodOrdering/DinnerMenu';
import Pickup from './Components/FoodOrdering/Pickup'; // Changed 'Pickup' to 'pickup'
import SelectedFoods from './Components/FoodOrdering/SelectedFoods';
import LunchMenu from './Components/FoodOrdering/LunchMenu';
import BeverageMenu from './Components/FoodOrdering/BeverageMenu';
import LoginPage from './Components/FoodOrdering/LoginPage';





import ManagerSignin from './Components/ManagerComponent/ManagerSignin';
import ManagerSignUp from './Components/ManagerComponent/ManagerSignUp';
import Product from './Components/ItemComponent/product';
import ItemDetails from './Components/ItemComponent/Itemdetails';
import UpdateItem from './Components/ItemComponent/UpdateItem';
import ItemRepoart from './Components/ItemComponent/ItemRepoart';
import AdminProfile from './Components/FoodOrdering/AdminSide/AdminProfle';
import FoodAdd from './Components/FoodOrdering/AdminSide/FoodAdd';
import ProductList from './Components/FoodOrdering/AdminSide/ProductList';
import AdminLayout from './Components/FoodOrdering/AdminSide/AdminLayout';

import FoodAdminDashboard from './Components/FoodOrdering/AdminSide/FoodAdminDashboard';
import EditProduct from './Components/FoodOrdering/AdminSide/EditProduct';


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
            <Route path="/foodadminlogin" element={<LoginPage/>}/>
          </Route>

          <Route path='adminlayout' element={<AdminLayout />}>
            <Route index element={<FoodAdminDashboard/>}/>
            <Route path="adminprofile" element={<AdminProfile/>}/>
            <Route path="foodadd" element={<FoodAdd/>}/>
            <Route path="productlist" element={<ProductList/>}/>
            <Route path="editproduct/:productId" element={<EditProduct/>}/>
          </Route>



        </Routes>

        

        
      </Router>
    </div>
  );
}

export default App;
