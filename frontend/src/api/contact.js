import axios from "axios";

export const fetchAllContact = async () => {
  const res = await axios.get(
    "http://localhost:5000/api/admin"
  );
  return res.data;

};
