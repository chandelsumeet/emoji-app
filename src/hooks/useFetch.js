import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const useFetch = () => {
  const [apiData, setApiData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://emojihub.yurace.pro/api/all");
      const data = await response?.data;
      setApiData(data);
    } catch (error) {
      setError({ message: "An error occured", error });
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { apiData, loading, error };
};
export default useFetch;
