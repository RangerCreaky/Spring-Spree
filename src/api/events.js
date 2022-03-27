import client from "./client";

const getAllEvents = () => client.get("/event/all");

const eventApi = { getAllEvents };

export default eventApi;
