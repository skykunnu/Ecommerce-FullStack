import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEcom } from "../Context/EcomProvider";
import Loader from "../Components/Loader";

function SingleProduct() {
  const { id } = useParams();
  const {
    fetchSingleProduct,
    fetchCategories,
  } = useEcom();


  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading]=useState(false);
  const [categories, setCategories]=useState([]);
  const [singleProduct, setSingleProduct]=useState([]);
  // const [similarProduct, setSimilarProduct] = useState([]);

 useEffect(()=>{
  fetchData();
 },[id]); 


 async function fetchData(){
  setLoading(true);
  const product=await fetchSingleProduct(id);
  setSingleProduct(product);
  const categories=await fetchCategories();
  setCategories(categories);
  setLoading(false);
 }

  useEffect(()=>{
    setCategoryName(categories?.category?.find((obj)=>obj._id===singleProduct.category).name)
  },[singleProduct,categories])


if (loading) return <Loader />;

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
          {/* {similarProduct.map((item) => {
            return (
              <div key={item._id}>
                <img src={item.image} />
              </div>
            );
          })} */}
          </div>
        </>
      )}
    </>
  );
}

export default SingleProduct;
