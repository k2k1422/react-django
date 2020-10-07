import axios from "axios";
import { isEqual, get } from "lodash";

const api = () => {
  var persit = JSON.parse(localStorage.getItem("persist:mom"));
  persit["auth"] = JSON.parse(persit["auth"]);

  return axios.create({
    baseURL: "",
    headers: {
      access_token: get(persit, "auth.access.token", ""),
      uid: get(persit, "auth.uid", ""),
    },
  });
};

export default api;
