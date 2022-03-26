import apisauce from "apisauce";
import storage from "../storage";

const BASE_URL =
  process.env.REACT_APP_BASE_URL || "https://backend.springspree22.in";

const client = apisauce.create({
  baseURL: BASE_URL,
});

client.addAsyncRequestTransform(async (request) => {
  const token = await storage.get("token");
  if (!token) return;
  request.headers["Authorization"] = "Bearer " + token;
});

client.addAsyncResponseTransform(async (response) => {
  if (response.status === 401) {
    await storage.clear();
    window.location.reload();
  }
});

export default client;
