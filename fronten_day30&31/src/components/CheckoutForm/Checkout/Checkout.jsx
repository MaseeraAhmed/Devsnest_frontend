import { Button, CircularProgress, CssBaseline, Divider, Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { commerce } from '../../../lib/commerce';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import useStyles from './styles';


const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart, onCaptureCheckout,onEmptyCart }) => {
  
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const [isFinish,setIsFinish]=useState(false);
  const classes = useStyles();
  const history = useHistory();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

          setCheckoutToken(token);
        } catch {
          if (activeStep !== steps.length) history.push('/');
        }
      };

      generateToken();
    }
  }, [cart]);

  const test = (data) => {
    setShippingData(data);

    nextStep();
  };

  const timeout=()=>{
    setTimeout(()=>{
      setIsFinish(true);
    },2000)
  }

  let Confirmation = () => (isFinish ? (
    <>
      <div>
        <Typography variant="h5" style={{alignItems:"center"}}>Thank you for your purchase</Typography>
        <Divider className={classes.divider} />
        
      </div>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
    </>
  ) :(
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  ));

  

  const Form = () => (activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} test={test} />
    : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} onEmptyCart={onEmptyCart} timeout={timeout} />);

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
