import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
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
        {/* Compound Component pattern Version 1 */}
        <ProductCard product={product} className='bg-dark text-white'>
          <ProductCard.Image className='custom-image' style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}} />
          <ProductCard.Title
            className='text-bold'
            title={'Title front props'}
            activeClass='active'
          />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        {/* Compound Component pattern Version 2 */}
        <ProductCard product={product} className='bg-dark text-white'>
          <ProductImage className='custom-image' style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}} />
          <ProductTitle className='text-bold' activeClass='active' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: '#70D1F8',
            color: 'brown',
          }}
        >
          <ProductImage
            style={{
              borderRadius: '20px',
              boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
              padding: '10px',
              width: 'calc(100% - 20px)',
            }}
          />
          <ProductTitle
            style={{
              fontWeight: 'bold',
            }}
          />
          <ProductButtons
            style={{
              display: 'flex',
              justifyContent: 'end',
            }}
          />
        </ProductCard>
      </div>
      <hr />
    </div>
  );
};
