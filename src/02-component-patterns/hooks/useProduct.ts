import { useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({onChange, product}: useProductArgs) => {
  const [counter, setCount] = useState(0);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCount(newValue);

    onChange && onChange({count: newValue, product});
  };
  return {
    counter,
    increaseBy,
  };
};
