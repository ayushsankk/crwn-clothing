import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51ItUkKSJZ2cjXuM9rwkI3A9QuWmTPb88f7dU1aeGne0D1S9NHpffo9bXPI9VJbPMgg8jdZZtFbRKBKOjO3XcYfK800SmK81RsS';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
  return (
    <StripeCheckout
      lable="Pay Now"
      name="CRWN Clothing ltd"
      billingAddress
      shippingAddress
      image="https://songhay.blob.core.windows.net/shared-styles-svg/akyinkyin.svg"
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;