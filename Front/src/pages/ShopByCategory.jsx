/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useEcom } from "../context/EcomProvider";
import DisplayProduct from "../components/DisplayProduct";
import Loader from "../components/Loader";

function NoProductsFoundBanner(){
  return(
    <div className="text-center text-2xl text-red-500 font-bold my-50">No Products Found</div>
  );
}

function ShopByCategory() {
    const { categoryId } = useParams();
  const { filterByCategory,loading } = useEcom();
const [productsByCat, setProductsByCat] = useState([]);

  useEffect(() => {
    if (categoryId) {
      fetchData()
    }
  }, [categoryId]);

  async function fetchData(){
    const products=await filterByCategory(categoryId,true);
    setProductsByCat(products);
  }
 
  if (loading) return <Loader />

  return productsByCat?.products?.length===0?(
    <NoProductsFoundBanner />
  ):(
    <DisplayProduct product={productsByCat} />
  );
  
}

export default ShopByCategory;