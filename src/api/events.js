import client from "./client";

const getAllEvents = () => client.get("/event/all");
const registerFree = (id) => client.post(`/register/${id}`);

const eventApi = { getAllEvents, registerFree };

export default eventApi;
