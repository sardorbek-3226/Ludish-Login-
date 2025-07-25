import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        console.error(err);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isPending, error };
}


export default useFetch