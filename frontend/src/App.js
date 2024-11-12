import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddOrder from './components/AddOrder';
import SearchOrder from './components/SearchOrder';
import DeleteOrder from './components/DeleteOrder';
import UpdateOrder from './components/UpdateOrder';
  // Import the ViewOrders component

function App() {
  return (
    <Router>
      <nav>
        <Link to="/add-order">Add Order</Link>
        <Link to="/search-order">Search Order</Link>
        <Link to="/delete-order">Delete Order</Link>
        <Link to="/update-order">Update Order</Link>
        
      </nav>
      <Routes>
        <Route path="/add-order" element={<AddOrder />} />
        <Route path="/search-order" element={<SearchOrder />} />
        <Route path="/delete-order" element={<DeleteOrder />} />
        <Route path="/update-order" element={<UpdateOrder />} />
       
      </Routes>
    </Router>
  );
}

export default App;
