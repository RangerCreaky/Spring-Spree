import { useState } from "react";
import paymentApi from "../api/payment";
import { useApi } from "./api";
import { useAuth } from "./auth";

const razorpay_key =
  "rzp_test_fH6e426IsoGX0S" || process.env.REACT_APP_BASE_URL;

const loadScript = (src) =>
  new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });

export function usePaymentGateway() {
  const [loading, setLoading] = useState();

  const makePayment = async ({
    payment_name,
    description,
    image,
    amount,
    order_id,
    name,
    email,
    contact,
  }) => {
    setLoading(true);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      setLoading(false);
      return {
        done: false,
        message: "Razorpay SDK failed to load. Are you online?",
        data: {},
      };
    }

    return new Promise((resolve) => {
      const options = {
        key: razorpay_key,
        amount,
        currency: "INR",
        name: payment_name,
        description: description,
        image,
        order_id,
        handler: ({
          razorpay_payment_id,
          razorpay_order_id,
          razorpay_signature,
        }) => {
          setLoading(false);
          resolve({
            done: true,
            data: {
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature,
            },
            message: "Payment successful",
          });
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
            resolve({ done: false, message: "Payment cancelled" });
          },
        },
        prefill: { name, email, contact },
        notes: {
          address: "NIT Warangal",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        // payment cancled
        // payment will stop on modal close
      });
      paymentObject.open();
    });
  };

  return { makePayment, loading };
}

export function useEventPayment() {
  const gateway = usePaymentGateway();
  const createOrder = useApi(paymentApi.createOrder);
  const paymentConfirm = useApi(paymentApi.paymentConfirm);
  const { user } = useAuth();

  const makePayment = async ({ event, specialEvent = 0 }) => {
    const event_id = specialEvent ? event.key : event._id;

    const order = await createOrder.request(event_id, {
      specialEvent,
    });
    if (!order.ok) {
      alert("Something went wrong. Please try again later");
      return;
    }
    const razorpay_request = await gateway.makePayment({
      payment_name: event.name,
      description: event.description?.substr(0, 255),
      image: event.poster,
      amount: order.data.amount,
      order_id: order.data.id,
      name: user.name,
      email: user.email,
      contact: user.mobile,
    });

    if (!razorpay_request.done) {
      alert(razorpay_request.message);
      return;
    }

    const payment = await paymentConfirm.request({
      ...razorpay_request.data,
      id: user._id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      event_id,
      event: event.name,
      registration_fee: order.amount,
      specialEvent,
    });

    if (!payment.ok) {
      alert(
        "Payment verification failed. If money is deducted from your account please contact us."
      );
      return;
    }

    return payment.data;
  };

  const loading =
    gateway.loading || createOrder.loading || paymentConfirm.loading;
  return { makePayment, loading };
}
