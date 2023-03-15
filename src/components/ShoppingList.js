import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [newCategory, setCatagory] = useState([])
 
  const handleChange = (category) => {
    setCatagory((newCategory) => 
    items.filter((item) => item.category === category) )
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e) => handleChange(e.target.value)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newCategory.length > 0
        ? newCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))
        : items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
