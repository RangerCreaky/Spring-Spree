import { useState } from "react";

export function useApi(func) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const request = async (...args) => {
    setLoading(true);
    const response = await func(...args);
    setLoading(false);

    if (response.ok) {
      setData(response.data);
    } else {
      console.log(response);
    }

    return response;
  };

  return { data, loading, request, setData };
}
