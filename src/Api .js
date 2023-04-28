import axios from "axios";

export const fetchData = () => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/users`
  );
};
