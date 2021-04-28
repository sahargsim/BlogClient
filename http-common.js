import axios from "axios";

export default axios.create({
  baseURL: "https://app-stock-sahar.herokuapp.com/",
  headers: {
    "Content-type": "application/json"
  }
});