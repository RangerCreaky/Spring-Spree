import client from "./client";

const contacts = (data) => client.post("/contactUs", data);

const commanApi = { contacts };

export default commanApi;
