import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEcom } from "../Context/EcomProvider";

function SingleProduct() {
  const { id } = useParams();
  const {
    fetchSingleProduct,
    singleProduct,
    categories,
    productsByCat,
    filterByCategory,
  } = useEcom();

  // console.log(productsByCat);

  const [categoryName, setCategoryName] = useState("");
  const [similarProduct, setSimilarProduct] = useState([]);

  useEffect(() => {
    fetchSingleProduct(id);
  }, []);

  useEffect(() => {
      setCategoryName(
        categories.find((obj) => obj._id === singleProduct.category)?.name
      );
    
    filterByCategory(singleProduct.category);
  }, [categories, singleProduct]);

  useEffect(() => {
    fetchSimilarProduct();
  }, [productsByCat, singleProduct]);

  function fetchSimilarProduct() {
    setSimilarProduct(
      productsByCat.filter((item) => item._id !== singleProduct._id)
    );
  }

  return (
    <>
      {singleProduct && (
        <>
          <div>
            <div className="left">
              <img src={singleProduct.image} />
            </div>
            <div className="right">
              <h2>{singleProduct.title}</h2>
              <p>
                <strong>Brand:</strong>
                {singleProduct.brand}
              </p>
              <p>
                <strong>Category:</strong>
                {categoryName}
              </p>
              <p>{singleProduct.description}</p>
              <button>Add To Cart</button>
              <button>Add To Wishlist</button>
            </div>
          </div>
          <div>
            <h1>SIMILAR PRODUCTS HERE</h1>
          {similarProduct.map((item) => {
            return (
              <div key={item._id}>
                <img src={item.image} />
              </div>
            );
          })}
          </div>
        </>
      )}
    </>
  );
}

export default SingleProduct;
