export const validatePassword = (password) => {
  if (password.length < 8 || password.length > 18) {
    throw new Error("passsword must be between 8 and 16 character");
  }
  return "password is valid";
};
