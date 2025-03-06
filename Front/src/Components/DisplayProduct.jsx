/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdOutlineCurrencyRupee } from "react-icons/md";

// It is receiving the {product} array as a prop from where it is being passed (ie Home component & ShopByCategory component)
function DisplayProduct({ product }) {
  return (
    <div className="flex flex-wrap justify-center gap-16">
      {product.length > 0
        ? product.map((item) => {
            // console.log(product)
            return (
              <div key={item._id} className="text-center">
                <Link to={`/product/${item._id}`}>
                  <img
                    src={item.image}
                    className="w-[14rem] h-[14rem] object-contain border"
                  />
                </Link>
                <h2 className="my-2">
                  <span className="px-2 font-bold">{item.brand}</span>
                  {item.title.length > 5
                    ? item.title.split(" ").slice(0, 5).join(" ")
                    : item.title}
                </h2>

                <p className="my-2 flex items-center justify-center">
                  <span className="text-red-700 font-bold">
                    Discounted Price:-
                  </span>
                  <span>
                    <MdOutlineCurrencyRupee />
                  </span>
                  {item.discountedPrice}
                </p>

                <p className="my-2 flex items-center justify-center">
                  <span className="text-black font-bold">Original Price:-</span>
                  <span>
                    <MdOutlineCurrencyRupee />
                  </span>
                  <s>{item.OriginalPrice}</s>
                </p>
                <button className="rounded px-2 py-1 bg-blue-400 text-white">
                  Add to Wishlist
                </button>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default DisplayProduct;
