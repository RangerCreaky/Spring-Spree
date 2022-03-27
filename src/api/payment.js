import client from "./client";

const createOrder = (id) => client.post(`/payment/${id}`);
const paymentConfirm = (data) => client.post("/payment/store/details", data);

const paymentApi = { createOrder, paymentConfirm };
export default paymentApi;
