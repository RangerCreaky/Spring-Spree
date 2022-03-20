import apisauce from "apisauce";
// import storage from "auth/storage";

const BASE_URL =
  process.env.REACT_APP_BASE_URL || "https://backend.springspree22.in";

const client = apisauce.create({
  baseURL: BASE_URL,
});

// client.addAsyncRequestTransform(async (request) => {
//   const token = await storage.getData("token");
//   if (!token) return;
//   request.headers["Authorization"] = "Bearer " + token;
// });

export default client;
