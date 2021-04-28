import axios from "axios";

export default axios.create({
  baseURL: "https://app-stock-sahar.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});