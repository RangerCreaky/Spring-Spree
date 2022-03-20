import client from "./client";

export const getAllEvents = () => client.get("/event/all");
