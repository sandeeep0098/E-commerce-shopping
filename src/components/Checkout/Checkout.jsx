import React, { useState } from "react";
import "./Checkout.scss";

const Checkout = () => {
  const [submitCart, setSubmitCart] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setSubmitCart(true);
  };
  const preventHandler = (event) =>{
    event.preventDefault()
    setSubmitCart(false)
  }
  return (
    <form className="checkout">
      <div className="formdetails">
        <label htmlFor="name">Your-Name:</label>
        <input type="text" id="name" placeholder="Your-Name" />
      </div>
      <div className="formdetails">
        <label htmlFor="email">Your-Email:</label>
        <input type="email" id="email" placeholder="Your-email" />
      </div>
      <div className="formdetails">
        <label htmlFor="street">Street:</label>
        <input type="text" id="street" placeholder="Your Address" />
      </div>
      <div className="formdetails">
        <label htmlFor="name">Postal-Code:</label>
        <input type="text" id="name" placeholder="Postal-Code" />
      </div>
      <div className="formdetails">
        <label htmlFor="city">City:</label>
        <input type="text" id="city" placeholder="City-Name" />
      </div>
      <div className="submit">
        <button onClick={preventHandler}>Cancel</button>
        <button onClick={submitHandler}>Confirm</button>
      </div>
      {submitCart && <p>Sucessfully Placed The Order !! </p>}
    </form>
  );
};

export default Checkout;
