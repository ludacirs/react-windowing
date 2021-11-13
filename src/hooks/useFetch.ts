import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useFetch = <T>(URL: string): [T[], Dispatch<SetStateAction<T[]>>] => {
  const [state, setState] = useState<T[]>([]);

  const fetchData = async () => {
    try {
      const response: Response = await fetch(URL);
      const data = await response.json();
      setState(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [state, setState];
};

export default useFetch;
