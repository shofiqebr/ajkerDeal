import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./src/components/footer/Footer";
import Navbar from "./src/components/navbar/Navbar";
import Navbar2 from "./src/components/navbar2/Navbar2";
import MobileFooter from "./src/components/mobileFooter/MobileFooter";
import { createContext, useEffect, useState } from "react";
import { getStrdCart, getUserData } from "./src/utilities/Function";



export const GroupsContext = createContext([]);
export const WebContext = createContext([]);
export const ItemContext = createContext([]);
export const CartContext = createContext();
export const UserContext = createContext();

const App = () => {

    const {groups, webItems, items} = useLoaderData();
    const [cartItems, setCartItems] = useState(0);
    const [userData, setUserData] = useState([]);
    const [user, setUser] = useState("");


useEffect(() => {
    let token = getStrdCart("token");
    let parts = atob(decodeURIComponent(token)).split("_");
    getUserData(parts[0], parts[1], `["*"]`)
      .then((result) => {
        if (result.length > 0) {
          setUserData(result);
          setUser(result[0]?.customer_name);
        } else {
          
          setUser(null);
          setCartItems(0);
          setUserData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }, [user]);


    return (
        <div>
           <UserContext.Provider value={{user, userData, setUser}}>
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
      </UserContext.Provider>
            
        </div>
    );
};

export default App;