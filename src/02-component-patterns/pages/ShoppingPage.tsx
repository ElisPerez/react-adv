import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';

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
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={'Title front props'} />
          <ProductCard.Buttons />
        </ProductCard>

        {/* Compound Component pattern Version 2 */}
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={''} />
          <ProductButtons />
        </ProductCard>
      </div>
      <hr />
    </div>
  );
};
