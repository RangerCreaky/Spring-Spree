import client from "./client";

const addUser = (data) => client.post("/addUser", data);
const searchUser = (email) => client.get(`/getOfflineUser/${email}`);
const updateUser = (id, data) => client.put(`/updateOfflineUser/${id}`, data);
const login = (data) => client.post("/signin", data);
const signup = (data) => client.post("/signup", data);
const userProfile = () => client.get("/user/profile");
const resendVerifyMail = () => client.get("/sendMail");
const verifyMail = (data) => client.post("/verifyEmail", data);
const passwordResetRequest = (data) =>
  client.post("/resetPasswordRequest", data);
const passwordReset = (id, data) => client.post(`/resetPassword/${id}`, data);

const authApi = {
  addUser,
  searchUser,
  updateUser,
  login,
  signup,
  userProfile,
  resendVerifyMail,
  verifyMail,
  passwordResetRequest,
  passwordReset,
};

export default authApi;
