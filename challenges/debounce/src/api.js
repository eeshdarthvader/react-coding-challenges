/**
 * Pseudo APIs
 */

let flag = false;

export const saveUser = async ({ name, surname, email, roleName }) => {
  return new Promise((resolve) => {
    if (!flag) {
      flag = true;
      console.log("success")
      resolve({ state: "success", data: { name, surname, email, roleName } });
      setTimeout(() => {
        flag = false;
      }, 5e3);
    } else {
      console.log("error")
      resolve({ state: "error", error: "Api Rate Limit" });
    }
  });
};
