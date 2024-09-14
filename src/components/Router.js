import React, { Suspense } from "react" ;
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Body from "./Body"
import About  from "./About"
import Error from "./Error"
import ContactUs from "./ContactUs"
import Cart from "./Cart.js"
import Grocery from './Grocery.js'
import RestaurantMenu from "./RestaurantMenu.js"

const Router = () => {
  const appRouter = createBrowserRouter([
        {
          path : "/",
          element : <Body />
        },
        {
          path : "/about",
          element : <About />
        },
        {
          path : "/contact",
          element : <ContactUs />
        },
        {
          path : "/cart",
          element : <Cart/>
        },
        {
          path : "/grocery",
          element : <Grocery/>
        },
        {
          path : "/restaurants/:resId",
          element : <RestaurantMenu />
        }
   ])
    
   return (
      <RouterProvider router={appRouter} />
   );
};

export default Router;