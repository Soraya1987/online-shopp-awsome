import React,{useContext} from "react";
import { Link } from "react-router-dom";
//Context
import { cartContext } from "../context/CartContextProvider";
//Icons
import shopIcon from "../assets/icons/shop.svg";
//Style
import styles from "./Navbar.module.css"

const Navbar=()=>{
    const{state}=useContext(cartContext);
    return(
    <div className={styles.mainCountainer}>
        <div className={styles.container}>
            <Link to="/products" className={styles.productLink}>products</Link>
               <div className={styles.iconContainer}>
                  <Link to="/cart"><img src={shopIcon} alt="shop"/></Link>
            
                  <span>{state.itemsCounter}</span>
                </div>
        </div>
        
    </div>
    )
}
export default Navbar;