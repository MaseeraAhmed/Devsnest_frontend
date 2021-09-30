import { Box, Button, Card, Container, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import './checkOutProduct.css';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {


  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link className="link" to="/">
        start adding some
      </Link>
      !
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <div>
      <div className="checkout">
        <div className="checkout__left">

          <div>
            <h1 className="checkout__title">Your shopping basket</h1>
            {cart.line_items.map((lineItem) => (
              <CartItem
              
                item={lineItem}
                onUpdateCartQty={onUpdateCartQty}
                onRemoveFromCart={onRemoveFromCart}
              />
            ))}
          </div>

        </div>

      </div>

      <Card variant="outlined" className="cardDetails">
        <Typography variant="h4" className="cardTotal">
          Cart Total
        </Typography>
        <div style={{ width: '100%' }}>
          <Box
            display="flex"
            justifyContent="flex-start"
            m={1}
            p={1}
            bgcolor="background.paper"
            style={{ borderBottom: '1px solid grey', width: '100%' }}
          >
            <Box p={1} style={{ width: '100%', fontWeight: 'bold' }}>
              Sub Total
              <span p={1} style={{ float: 'right', fontWeight: 'bold' }}>
                {cart.subtotal.formatted_with_symbol}
              </span>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            m={1}
            p={1}
            bgcolor="background.paper"
            style={{ borderBottom: '1px solid grey', width: '100%' }}
          >
            <Box p={1} style={{ width: '100%', fontWeight: 'bold' }}>
              Shipping Charges
              <span p={1} style={{ float: 'right', fontWeight: 'bold' }}>
                {' '}
                Free{' '}
              </span>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            m={1}
            p={1}
            bgcolor="background.paper"
            style={{ borderBottom: '1px solid grey', width: '100%' }}
          >
            <Box p={1} style={{ width: '100%', fontWeight: 'bold' }}>
              Total
              <span p={1} style={{ float: 'right', fontWeight: 'bold' }}>
                {cart.subtotal.formatted_with_symbol}
              </span>
            </Box>
          </Box>
        </div>
        <div>
          <Button
            className="emptyButton"
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            className="checkoutButton"
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </Card>
    </div>
  );

  return (
    <Container>
      <div className="toolbar" />
      
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
