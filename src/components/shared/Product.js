import React,{useContext} from "react";
import { Link } from "react-router-dom";
//Function
import { shorten, isInCart,quantityCount } from "../../helpers/functions";
//Context
import { cartContext } from "../../context/CartContextProvider";
//Icon
import trashIcon from "../../assets/icons/trash.svg";
//Style
import styles from "./Product.module.css";

const Product=({productData})=>{
    const {state,dispath}= useContext(cartContext);
    return(
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt='products' style={{width:"200px"}}/>
            <h3>{shorten(productData.title) }</h3>
            <p>{productData.price} $</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Ditails</Link>
                <div className={styles.buttonContainer}>
                     {quantityCount(state,productData.id)>1 && <button className={styles.smallButton} onClick={()=>dispath({type:"DECREASE",payload:productData})}>-</button>}
                     {quantityCount(state,productData.id)===1 && <button className={styles.smallButton} onClick={()=>dispath({type:"REMOVE_ITEM",payload:productData})}><img src={trashIcon} alt="trash" style={{width:"20px"}}/></button>}
                     {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}          
                    {
                        isInCart(state,productData.id)?
                        <button className={styles.smallButton} onClick={()=>dispath({type:"INCREASE", payload:productData })}>+</button>:
                        <button onClick={()=>dispath({type:"ADD_ITEM",payload:productData})}>Add to cart</button>
                    }
                    
                       
                    
                </div>
            </div>
        </div>
    )
}
export default Product;