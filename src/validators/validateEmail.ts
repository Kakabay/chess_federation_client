export const validateEmail = (email: string): boolean => {
  const mailReg: RegExp =
    /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!mailReg.test(email)) {
    return false;
  }
  return true;
};
