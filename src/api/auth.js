import client from "./client";

export const login = (data) => client.post("/signin", data);
export const signup = (data) => client.post("/signup", data);
export const userProfile = () => client.get("/user/profile");
export const resendVerifyMail = () => client.get("/sendMail");
export const verifyMail = (data) => client.post("/verifyEmail", data);
export const passwordResetRequest = (data) =>
  client.post("/resetPasswordRequest", data);
export const passwordReset = (id, data) =>
  client.post(`/resetPassword/${id}`, data);

const authApi = {
  login,
  signup,
  userProfile,
  resendVerifyMail,
  verifyMail,
  passwordResetRequest,
  passwordReset,
};

export default authApi;
