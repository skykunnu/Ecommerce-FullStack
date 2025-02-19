import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "./pages/First";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import ShopByCategory from "./pages/ShopByCategory";
import SingleProduct from "./pages/SingleProduct";
import EcomProvider from "./context/EcomProvider";
import AddProduct from "./admin/AddProduct";



// component is a function that renders UI element. 


const router = createBrowserRouter([
  {
    path: "/", //  "/": Renders the First component, which will also render the Home component by default.
    element: <First />,
    children: [
    {
      index:true,  // It represents the default route. It renders the Home component 
      element:<Home />
    },
    {
      path:"/wishlist", // navigating to /wishlist renders the Wishlist component. same for rest of the components. 
      element:<Wishlist />
    },
    {
      path:"/cart",
      element:<Cart />
    },
    {
      path:"/category/:categoryId",
      element:<ShopByCategory />
    },
    {
      path:"/product/:id", // This is a dynamic route. when the user visits /product/ee3a34578abc, the SingleProduct component will be rendered with the parameter id set to ee3a34578abc. 
      element:<SingleProduct />
    },
    {
      path:"/admin/AddProduct",
      element:<AddProduct />
    }
  ],
  },
]);

function App() {
  // The App function renders the entire application inside the Ecom Procider. 

  return (
 <>
 {/* It is one of the most important part of routing. without it you won't be able to handle URL changes or render different pages based on routes. it manages routing, URL synchronization, and access to router hooks(useNavigate & useParams).*/}
  
  {/* EcomProvider provides access to shared state and functions (e.g., products, cart, and functions like fetchProduct and addToCart) across the entire app. 
  Any component wrapped by EcomProvider can use the custom hook useEcom to access this shared state.
  */}

  <EcomProvider> 
    {/* The RouterProvider is responsible for rendering different components based on the current URL.  
    It uses router object to determine which components to render for each route.
    And this makes RouterProvider and any components rendered by the router the children of EcomProvider.  
    */}
  <RouterProvider router={router} /> 
  </EcomProvider>
 </> 
  );
}

export default App;
