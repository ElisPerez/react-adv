import { useState } from 'react';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import { Product } from '../interfaces/interfaces';

import '../styles/custom-styles.css';

const product1 = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png',
};

const product2 = {
  id: '2',
  title: 'Coffee Mug - Meme',
  img: './coffee-mug2.png',
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
    console.log('onProductCountChange', 'Counter:', count, 'Product:', product);
  };
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            className='bg-dark text-white'
            onChange={onProductCountChange}
          >
            <ProductImage
              className='custom-image'
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            />
            <ProductTitle className='text-bold' activeClass='active' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>
      <div className='shopping-cart'>
        <ProductCard
          className='bg-dark text-white'
          product={product2}
          style={{ width: '100px' }}
          // onChange={() => onProductCountChange()}
        >
          <ProductImage
            className='custom-image'
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductButtons className='custom-buttons' />
        </ProductCard>
        <ProductCard product={product1} className='bg-dark text-white' style={{ width: '100px' }}>
          <ProductImage
            className='custom-image'
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductButtons className='custom-buttons' />
        </ProductCard>
      </div>
      <hr />
    </div>
  );
};
