import { useParams } from 'react-router-dom';
import styles from './Product.module.css';
import { useEffect, useState } from 'react';

type ProductType = Partial<{
  Title: string;
  ImageFilename: string;
  Code: string;
  Description: string;
  Notes: string;
}>;

const Product = () => {
  const { family, group, product } = useParams();
  const [productData, setProductData] = useState<ProductType>();

  useEffect(() => {
    if (product) {
      getProduct();
    }
  }, [product]);

  const getProduct = () => {
    const url = `/api/products/product/${product}`;
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-requested-with': 'XMLHttpRequest',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProductData(data);
      });
  };

  const checkImage = (image: string | undefined): boolean => {
    let isImage = false;
    if (!image) {
      return isImage;
    }
    fetch(image)
      .then((response) => response.ok)
      .then(() => (isImage = true))
      .catch((error) => false);
    return isImage;
  };

  return (
    <div className={styles.product}>
      <h3 className={styles.productTitle}>{productData?.Title}</h3>
      <div className={styles.productContent}>
        {productData?.ImageFilename && (
          <div className={styles.productImage}>
            <img src={productData.ImageFilename} alt={productData.Title} />
          </div>
        )}
        <div className={styles.productInfo}>
          <div className={styles.productDescription}>
            <h3>{productData?.Code}</h3>
            <h4>{productData?.Title}</h4>
            <div
              className={styles.productDescription}
              dangerouslySetInnerHTML={{
                __html: productData?.Description as string | TrustedHTML,
              }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
