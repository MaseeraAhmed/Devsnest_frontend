import { MenuItem } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import React from 'react';
import { Link } from 'react-router-dom';
import '../checkOutProduct.css';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);
  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);
  

  console.log(item);

  return (
    <div className="checkoutProduct" >
      <img src={item.media.source} alt="" className="checkoutProduct__image" />
      
     <div className="checkoutProduct__info"> 
        <Link className="checkoutProduct__title" to={`/product/${item.product_id}`}>{item.name}</Link>
        <FormControl>

          <Select
            value={item.quantity}
            onChange={(e) => handleUpdateCartQty(item.id, item.quantity = (e.target.value))}
          >
            <MenuItem value="" disabled>Quantity</MenuItem>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>

          </Select>
        </FormControl>
 
        <p className="checkoutProduct__price">
          <br />
          <strong>{item.price.formatted_with_symbol}</strong>
        </p>
        
        <div className="checkoutProduct__rating" />
        <button onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>Remove from the Cart</button>
    </div>
</div>
  );
};
export default CartItem;

