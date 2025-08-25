import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchProduct } from '@/services/apiService';

import styles from './ProductPage.module.css';

interface ProductDetails {
  title: string;
  description: string;
  image: string;
  code: string;
  slug: string;
}

const ProductPage = () => {
  const { family, group, product } = useParams();
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(
    null,
  );

  useEffect(() => {
    if (product) {
      getProduct(product);
    }
  }, [product]);

  const getProduct = async (slug: string) => {
    try {
      const data = await fetchProduct(slug);
      console.log(data);
      setProductDetails(data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  return (
    <div className={styles.productPage}>
      <div className={styles.productImage}>
        <img src={productDetails?.image} alt={productDetails?.title} />
      </div>
      <div className={styles.productDetails}>
        <h1>
          {productDetails?.title} {productDetails?.code}
        </h1>
        <p>{productDetails?.description}</p>
        <div className={styles.productDetails}>
          <h2>Product Details</h2>
          <p>Here you can add details about the product.</p>
          {/* Example product details */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
