import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./src/components/footer/Footer";
import Navbar from "./src/components/navbar/Navbar";
import Navbar2 from "./src/components/navbar2/Navbar2";
import MobileFooter from "./src/components/mobileFooter/MobileFooter";
import { createContext, useEffect, useState } from "react";
import { getStrdCart } from "./src/utilities/Function";
// import { getStrdCart } from "../utilities/Function";


export const GroupsContext = createContext([]);
export const WebContext = createContext([]);
export const ItemContext = createContext([]);
export const CartContext = createContext();

const App = () => {

    const {groups, webItems, items} = useLoaderData();
    const [cartItems, setCartItems] = useState(0);
    useEffect(() => {
      let cart = getStrdCart("cart");
      setCartItems(cart.length ? cart.length : 0);
    }, []);


    return (
        <div>
      <CartContext.Provider value={{cartItems, setCartItems}}>
        <GroupsContext.Provider value={groups}>
          <WebContext.Provider value={webItems}>
            <ItemContext.Provider value={items}>
            <Navbar/>
            <Navbar2/>
            <Outlet/>
            <Footer/>
            <MobileFooter/>
            </ItemContext.Provider>
          </WebContext.Provider>
        </GroupsContext.Provider>
      </CartContext.Provider>
            
        </div>
    );
};

export default App;