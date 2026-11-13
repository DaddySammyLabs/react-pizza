import { useState } from "react";

// import { SIZES, DOUGHS } from "@/constants/itemConstants";
import { DOUGHS } from "@/constants/itemConstants";

const useItemOptions = (item) => {
  const [selectedSize, setSelectedSize] = useState(item.sizes[0]);
  const [selectedDough, setSelectedDough] = useState(DOUGHS[0]);

  const currentSize = item.sizes.find(
    (size) => size.value === selectedSize.value,
  );

  const currentPrice = currentSize?.price ?? 0;

  return {
    DOUGHS,
    selectedSize,
    setSelectedSize,
    selectedDough,
    setSelectedDough,
    currentPrice,
  };
};

export default useItemOptions;
