import { CssBaseline } from "@material-ui/core";
import { default as React, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/CheckoutForm/Checkout/Checkout";
import Header from "../components/Header";
import { commerce } from "../lib/commerce";
import Accessories from "../pages/Accessories";
import Form from "../pages/Form";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Men from "../pages/Men";
import SignUp from "../pages/Signup";
import SingleProduct from "../pages/SingleProduct";
import Wishlist from "../pages/Wishlist";
import Women from "../pages/Women";
import Loaders from "../components/Loaders";

const Routes = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [metaData, setMetaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    const response = await commerce.products.list({ limit: 50 });
    const { data, meta } = response;
    setMetaData(meta);
    setProducts(data);
    setIsLoading(false);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <div>
      <CssBaseline />
      <Header
        totalItems={cart.total_items}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Switch>
        <Route exact path="/">
          <Home
            products={products}
            onAddToCart={handleAddToCart}
            handleUpdateCartQty
          />
        </Route>
        <Route path="/product/:product_id">
          <SingleProduct onAddToCart={handleAddToCart} />
        </Route>
        <Route path="/men"  >
          <Men onAddToCart={handleAddToCart}/>
        </Route>
        <Route path="/women"  >
          <Women onAddToCart={handleAddToCart}/>
        </Route>
        <Route path="/accessories"  >
          <Accessories onAddToCart={handleAddToCart}/>
        </Route>
      
        
        <Route path="/contact" component={Form} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/cart">
          <Cart
            cart={cart}
            onUpdateCartQty={handleUpdateCartQty}
            onRemoveFromCart={handleRemoveFromCart}
            onEmptyCart={handleEmptyCart}
          />
        </Route>
        <Route path="/checkout" exact>
          <Checkout
            cart={cart}
            order={order}
            onCaptureCheckout={handleCaptureCheckout}
            error={errorMessage}
            onEmptyCart={handleEmptyCart}
          />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/loader" component={Loaders} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </div>
  );
};

export default Routes;
