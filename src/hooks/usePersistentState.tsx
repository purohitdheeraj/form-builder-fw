import { useState, useEffect, Dispatch, SetStateAction } from "react";

const usePersistentState = <T,>(
  localStorageKey: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>, () => void] => {
  const [value, setValue] = useState<T>(
    JSON.parse(
      localStorage.getItem(localStorageKey) ||
        JSON.stringify(defaultValue)
    )
  );

  useEffect(() => {
    localStorage.setItem(
      localStorageKey,
      JSON.stringify(value)
    );
  }, [value, localStorageKey]);

  const clearValue = () => {
    localStorage.removeItem(localStorageKey);
    setValue(
      JSON.parse(
        localStorage.getItem(localStorageKey) ||
          JSON.stringify(defaultValue)
      )
    );
  };

  return [value, setValue, clearValue];
};

export default usePersistentState;
