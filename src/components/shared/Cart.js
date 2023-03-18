import React,{useContext} from "react";
//Context
import { cartContext } from "../../context/CartContextProvider";
//Functions
import { shorten } from "../../helpers/functions";
//Icons
import trashIcon from "../../assets/icons/trash.svg";
//Style
import styles from "./Cart.module.css";

const Cart=(props)=>{
    const {image,title,price,quantity}=props.data;
    const {dispath}=useContext(cartContext);
    return(
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="product"/>
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity>1?
                    <button onClick={()=>dispath({type:"DECREASE",payload:props.data})}>-</button>:
                    <button onClick={()=>dispath({type:"REMOVE_ITEM",payload:props.data})}><img src={trashIcon} alt="trash" style={{width:"20px"}}/></button>
                }
                <button onClick={()=>dispath({type:"INCREASE",payload:props.data})}>+</button>
            </div>
        </div>
    )
}
export default Cart;