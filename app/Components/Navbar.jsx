import React from "react";

function Navbar() {
  return (
    <nav>
      <ul className="flex justify-end space-x-16 mr-20 mt-10">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Our services</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Update</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
