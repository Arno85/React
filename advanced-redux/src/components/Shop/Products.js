import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = () => {
  const products = useSelector(state => state.products.products);

  let productListContent = <p>There are no products to show!</p>

  if (products.length > 0) {
    productListContent = products.map(product => (
      <ProductItem
        key={ product.id }
        id={ product.id }
        title={ product.title }
        price={ product.price }
        description={ product.description }
      />
    ));
  }

  return (
    <section className={ classes.products }>
      <h2>Buy your favorite products</h2>
      <ul> { productListContent } </ul>
    </section>
  );
};

export default Products;
