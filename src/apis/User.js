import axios from "axios";

const instance = axios.create({
  baseURL: "https://reqres.in/api/users",
  headers: {
    "Content-Type": "application/json"
  }
});

const getDelayConfig = () => ({
  params: {
    delay: 0,
  },
});

const UserAPI = {
  getAll: config => instance.get("", Object.assign(getDelayConfig(), config)),
};

export default UserAPI;
