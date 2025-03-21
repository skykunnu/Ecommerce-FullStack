/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useEcom } from "../context/EcomProvider";
import Loader from "../components/Loader";
import DisplayProduct from "../Components/DisplayProduct";

// Home component is responsible for fetching and displaying the list of products. 

function Home() {
  const { product, loading, fetchAllProducts } = useEcom();



// useEffect is used to call fetchAllProducts when the components mounts (ie, when the Home Component is rendered for the first time.)
  useEffect(() => {
    fetchAllProducts();
  }, []);


  // DisplayProduct component passing the product array as a prop. 
  return (loading)? <Loader />:<DisplayProduct product={product}/>;

  
}

export default Home;
