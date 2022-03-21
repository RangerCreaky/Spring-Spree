// function loadScript() {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     document.body.appendChild(script);
//     script.onload = () => {
//         return true;
//     };
//     script.onerror = () => {
//         return false;
//     };
    
// }
const onPaymentSuccess = async (payment_details, event, user) => {
    console.log("payment_id: ", payment_details);
    
    // store and verify the success feilds in server
    await fetch("http://localhost:3000/payment/store/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...payment_details, event_id: event._id, name: user.name, email:user.email, mobile:user.mobile, event:event.name, registration_fee:event.registration_fee})
    }).then(o => {
        // if the payment is stored and verified succesfully redirect to the event page
        console.log(o);
    }).catch(e => {
        console.error(e);
    })
}
const createOrder = async (event) => {
    // give a post request at /payment/:event_id    

    let myOrder = await fetch(`http://localhost:3000/payment/${event._id}`, {
        method: 'POST',
    }).then(async (o) => {
        let a = await o.text().then((ord, err) => {
            if(err) console.error(err); 
            console.log(ord);
            return ord;
        });
        return a;

    }).catch(e => {
        console.error(e);
        return null;
    })
    return myOrder;
}
const createCheckout = async (order, event, user) => {
    let neworder = JSON.parse(order);
    const options = {
        "key": "rzp_test_fH6e426IsoGX0S", // poor practice, this key is public. store it in .env file
        "amount": neworder.amount,
        "currency": "INR",
        "name": "NIT Warangal",
        "description": "Test Transaction",
        "image": event.poster,
        "order_id": order.id,
        "handler": (response) => {onPaymentSuccess(response, event, user)},
        "prefill": {
            "name": user.name, //inserrt name of the user
            "email": user.email,    //insert email of the user
            "contact": user.mobile //insert contact number of the user
        },
        "notes": {
            "address": "NIT Warangal"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    // eslint-disable-next-line
    let rzp1 = await new Razorpay(options);

    await rzp1.on('payment.failed', function (response){

        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
    });
    return rzp1;
}
// pass the event as a parameter
const RegisterAndPay = async (user) => {
    const event = {
        "_id": "62358c754dc1c6a40b8c01b9",
        "name": "quiz",
        "venue": "audi",
        "summary": "new event",
        "event_manager": "quiz club",
        "registration_fee": 100,
        "rounds": 2,
        "prize_money": 2000,
        "no_of_prizes": 2,
        "social_media": "insta:nnn",
        "description": "hello",
        "structure": "12",
        "rules": "no rules",
        "judging_criteria": "cjksdbjk",
        "poster": "localhost:3000/static/download.jpg.jpg",
        "start_date": "2022-03-18T00:00:00.000Z",
        "end_date": "2022-03-20T00:00:00.000Z",
        "registered_users": [
          {
            "_id": "62357d607895e039d663b56b",
            "name": "harsh",
            "email": "harsh@gmail.com",
            "mobile": "2999395"
          }
        ],
        "createdAt": "2022-03-19T07:55:33.863Z",
        "updatedAt": "2022-03-19T08:02:24.956Z",
        "__v": 1
      }
    // give a post request at /payment/:event_id
    let order = await createOrder(event);
    if(!order) {
        console.error("Order failed to create");
        return null;
    }
    
    let checkout = await createCheckout(order, event, user);
    if(!checkout) {
        console.error("Checkout failed to create");
        return null;
    }
    // finally open the checkout
    checkout.open();
}

export default RegisterAndPay;
