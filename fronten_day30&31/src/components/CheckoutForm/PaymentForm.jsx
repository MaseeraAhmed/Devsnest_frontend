import { Button, Divider } from '@material-ui/core';
import React from 'react';
import Review from './Review';




const PaymentForm = ({ checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout,timeout,onEmptyCart }) => {


  const handleSubmit = async (event) => {
    event.preventDefault();
    

      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
        shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
        fulfillment: { shipping_method: shippingData.shippingOption }
      };

      // onEmptyCart();

      
      timeout();
      onCaptureCheckout(checkoutToken.id, orderData);
      nextStep();
  
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />


      <form onSubmit={(e) => handleSubmit(e)}>
           
            <br /> <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" onClick={backStep}>Back</Button>
              <Button type="submit" variant="contained"  color="primary">
                Pay {checkoutToken.live.subtotal.formatted_with_symbol}
              </Button>
            </div>
          </form>
    </>
  );
};

export default PaymentForm;
