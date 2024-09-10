import React, { useState } from "react";
import Products from "../Products/Products.tsx";
import './BodyContainer.css';

function BodyContainer() {
  return <div className="body-container">
    <Products/>
  </div>;
}

export default BodyContainer;
