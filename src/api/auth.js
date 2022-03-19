import client from "./client";

export const login = (data) => client.post("/signin", data);
export const signup = (data) => client.post("/signup", data);

const authApi = { login, signup };

export default authApi;
