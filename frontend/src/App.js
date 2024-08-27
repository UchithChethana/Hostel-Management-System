import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure this is uncommented

import Header from './ItemComponent/header';
import ItemDetails from './ItemComponent/Itemdetails';
import ItemRepoart from './ItemComponent/ItemRepoart';
import UpdateItem from './ItemComponent/UpdateItem';
import ManagerSignUp from './ManagerComponent/ManagerSignUp';
import ManagerSignin from './ManagerComponent/ManagerSignin';
import Product from './ItemComponent/product';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ManagerSignin />} />
          <Route path="/add-manager" element={<ManagerSignUp />} />
          <Route path="/add-item" element={<Product />} />
          <Route path="/itemdetails" element={<ItemDetails />} />
          <Route path="/itemupdate/:id" element={<UpdateItem />} />
          <Route path="/itemrepoart" element={<ItemRepoart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
