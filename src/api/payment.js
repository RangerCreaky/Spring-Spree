import client from "./client";

const createOrder = (id, data) => client.post(`/payment/${id}`, data);
const paymentConfirm = (data) => client.post("/payment/store/details", data);

const paymentApi = { createOrder, paymentConfirm };
export default paymentApi;
