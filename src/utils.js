export const isStudent = (email = "") =>
  email?.split("@")?.[1] === "student.nitw.ac.in";
