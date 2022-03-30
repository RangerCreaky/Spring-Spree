import client from "./client";

const getAllEvents = () => client.get("/event/all");
const specialEvents = () => client.get("/getAll/SpecialEvents");
const registerFree = (id) => client.post(`/register/${id}`);

const eventApi = { getAllEvents, registerFree, specialEvents };

export default eventApi;
