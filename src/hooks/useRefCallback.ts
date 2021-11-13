import { useCallback, useState } from "react";

const useRefCallback = <T>(): [T, (node: T) => void] => {
  const [state, setState] = useState<T>({} as T);

  const ref = useCallback((node: T) => {
    if (node) {
      setState(node);
    }
  }, []);

  return [state, ref];
};

export default useRefCallback;
