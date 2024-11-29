// Use environment variable or fallback to localhost
const host = process.env.REACT_APP_API_URL || "http://localhost:8000";
// Comment out or remove this line
// const host = "https://expense-tracker-app-knl1.onrender.com";

export const setAvatarAPI = `${host}/api/auth/setAvatar`;
export const registerAPI = `${host}/api/auth/register`;
export const loginAPI = `${host}/api/auth/login`;
export const addTransaction = `${host}/api/v1/addTransaction`;
export const getTransactions = `${host}/api/v1/getTransaction`;
export const editTransactions = `${host}/api/v1/updateTransaction`;
export const deleteTransactions = `${host}/api/v1/deleteTransaction`;