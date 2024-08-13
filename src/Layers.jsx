import { useState, useEffect } from "react";
import { RLayerVector } from "rlayers";

export const Layers = () => {
  const [anArray, setAnArray] = useState([])

  useEffect(() => {
    setAnArray([1, 2, 3])
  }, [])

  return (
    <>
      {anArray.map((value) => (
        <RLayerVector key={value} />
      ))}
    </>
  );
};
