import React from "react";

function MenuItem({ item, cart, setCart }) {
  // Count how many times this specific item is in the cart
  const itemCount = cart.filter((cartItem) => cartItem._id === item._id).length;

  const handleAdd = () => {
    setCart([...cart, item]);
  };

  const handleRemove = () => {
    const index = cart.findIndex((cartItem) => cartItem._id === item._id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  return (
    <div className="menu-item-row">
      <div className="menu-item-info">
        <div className="veg-badge">●</div>
        <h4 className="item-name">{item.itemName}</h4>
        <p className="item-price">₹{item.price}</p>
        <p className="item-description">Delicious and freshly prepared.</p>
      </div>
      
      <div className="menu-item-action">
        <img 
          src={"https://surl.li/idgnpr"}
          alt={item.itemName} 
          className="item-img"
        />
        <div className="qty-selector">
          {itemCount === 0 ? (
            <button className="add-btn" onClick={handleAdd}>ADD</button>
          ) : (
            <div className="counter">
              <button onClick={handleRemove}>−</button>
              <span>{itemCount}</span>
              <button onClick={handleAdd}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;