import { useState, useCallback } from "react";

const useInput = initialValue => {
   const [input, setInput] = useState(initialValue);

   const updateInput = useCallback(value => {
      const input = value;
      setInput(input);
   }, [setInput]);

   return [input, updateInput];
};

export default useInput;
