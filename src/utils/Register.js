// import { useAuth } from "../hooks/auth";

const onPaymentSuccess = async (payment_details, event, user) => {
  // console.log("payment_id: ", payment_details);
  const data = {
    razorpay_payment_id: payment_details.razorpay_payment_id,
    razorpay_order_id: payment_details.razorpay_order_id,
    razorpay_signature: payment_details.razorpay_signature,
    event_id: event._id,
    id: user._id || "623c44b04c002888aa67d15f",
    name: user.name,
    email: user.email,
    mobile: user.mobile,
    event: event.name,
    registration_fee: event.registration_fee,
  };
  // console.log(data);
  // store and verify the success feilds in server
  let success = await fetch("http://localhost:3000/payment/store/details", {
    // mode: 'no-cors',
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(async (o) => {
      // if the payment is stored and verified succesfully redirect to the event page
      return o;

    })
    .catch((e) => {
      console.error(e);
    });
    let txt = await success.json();
    if(event._id === "623c349874264a5c12781c51"){
        if(txt.status === "success"){
            alert("Payment Successful, Login again to register events");
            user["isAllowed"] = 1;
            window.location.href = `/login/`;
          }
    }
    else{
        if(txt.status === "success"){
            alert("Payment Successful");
            window.location.href = `/events/`;
        }
    }
    
};
const createOrder = async (event) => {

  let myOrder = await fetch(`http://localhost:3000/payment/${event._id}`, {
    method: "POST",
  })
    .then(async (o) => {
      let a = await o.text().then((ord, err) => {
        if (err) console.error(err);
        // console.log(ord);
        return ord;
      });
      return a;
    })
    .catch((e) => {
      console.error(e);
      return null;
    });
  return myOrder;
};
const createCheckout = async (order, event, user) => {
  let neworder = JSON.parse(order);
  const options = {
    key: "rzp_test_fH6e426IsoGX0S", // poor practice, this key is public. store it in .env file
    amount: neworder.amount,
    currency: "INR",
    name: "NIT Warangal",
    description: "Test Transaction",
    image: event.poster,
    order_id: neworder.id,
    handler: (response) => {
      onPaymentSuccess(response, event, user);
    },
    prefill: {
      name: user.name || "Harsh Sonkusare", //inserrt name of the user
      email: user.email || "harshsonkusare01@gmail.com", //insert email of the user
      contact: user.mobile || "8087732133", //insert contact number of the user
    },
    notes: {
      address: "NIT Warangal",
    },
    theme: {
      color: "#3399cc",
    },
  };
  // eslint-disable-next-line
  let rzp1 = await new Razorpay(options);

  await rzp1.on("payment.failed", function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  });
  return rzp1;
};
// pass the event as a parameter
const RegisterAndPay = async ({ user, event }) => {
  // give a post request at /payment/:event_id
  let order = await createOrder(event);
  if (!order) {
    console.error("Order failed to create");
    return null;
  }

  let checkout = await createCheckout(order, event, user);
  if (!checkout) {
    console.error("Checkout failed to create");
    return null;
  }
  // finally open the checkout
  checkout.open();
};

export default RegisterAndPay;
