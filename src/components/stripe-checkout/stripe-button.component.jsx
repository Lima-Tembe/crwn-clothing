import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  //stripe wants price in cents
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HTsjXDzOhX2s0ShKuPwxQ4ErWJFvg8rpOiANoMmnprKNBpTl9vb8F7wqAB6xFg8TyvoWHACrydYLpU49vUW0Y4m00MEbFsDHj";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;