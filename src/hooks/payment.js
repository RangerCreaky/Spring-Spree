import { useState } from "react";

const razorpay_key = "rzp_test_fH6e426IsoGX0S";

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
