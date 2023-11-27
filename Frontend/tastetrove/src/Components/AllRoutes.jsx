import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Pages/Register";
import SingleProduct from "../Pages/SingleProduct";
import Featured from "../Pages/Featured";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Login from "../Pages/Login";
import Cart from "../Pages/Cart";
import Sale from "../Pages/Sale";
import Payment from "../Pages/Payment";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/singleproduct/:id" element={<SingleMenu />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
