import client from "./client";

const contacts = (data) => client.post("/contactUs", data);
const validatePromo = (data) => client.post("/checkValidity", data);

const commanApi = { contacts, validatePromo };

export default commanApi;
