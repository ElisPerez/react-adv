import { useEffect, useState } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
  const [counter, setCount] = useState<number>(initialValues?.count || value);

  console.log(initialValues);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCount(newValue);

    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCount(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
