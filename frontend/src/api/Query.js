import axios from "axios";

export const fetchAllQuery = async () => {
  const res = await axios.get(
    "http://localhost:5000/api/queries"
  );
  return res.data;

};
