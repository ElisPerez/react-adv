import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  title?: string;
  activeClass?: string;
  style?: React.CSSProperties;
}
export const ProductTitle = ({ activeClass, className, title, style }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productTitle} ${className} ${activeClass}`} style={style}>{title ? title : product.title}</span>
  );
};
