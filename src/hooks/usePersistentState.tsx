import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { debounce } from "@/utils/debounce";

const usePersistentState = <T,>(
  localStorageKey: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>, () => void, "idle" | "saving" | "saved"] => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(localStorageKey);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");

  // Debounced localStorage save
  const debouncedSave = debounce((newValue: unknown) => {
    setSaveStatus("saving");
    localStorage.setItem(localStorageKey, JSON.stringify(newValue));

    setTimeout(() => {
      setSaveStatus("saved");
    }, 500); // Simulate slight save delay
  }, 1000) as (newValue: unknown) => void;

  useEffect(() => {
    if (value !== defaultValue) {
      debouncedSave(value);
    }
  }, [value]);

  const clearValue = () => {
    localStorage.removeItem(localStorageKey);
    setValue(defaultValue);
    setSaveStatus("idle");
  };

  return [value, setValue, clearValue, saveStatus];
};

export default usePersistentState;
