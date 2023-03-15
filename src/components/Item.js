import React, { useState } from "react"

function Item({ name, category }) {

  const [inCart, isInCart] = useState(false)

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => isInCart(!inCart)} className={!inCart ? "add" : ""}>{ !inCart ? 'Add to Cart' : 'Remove From Cart' }</button>
    </li>
  );
}

export default Item;
