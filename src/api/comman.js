import client from "./client";

const contacts = (data) => client.post("/contact/contactUs", data);

const commanApi = { contacts };

export default commanApi;
