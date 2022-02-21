import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KViuMJoCWCaMaGw9vesLVuT3hcUltg5oO5OPbXN30t7dOxZvXNIthmCLwYW1vCHcTd3cEvYt6mIdMTaIlUiih1z004CvyCJru";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Conscious Breakers Ltd."
      billingAddress
      shippingAddress
      image=""
      descriptions={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
