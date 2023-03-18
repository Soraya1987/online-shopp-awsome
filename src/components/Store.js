import React,{useContext} from "react";
//Context
import { PruductsContext } from "../context/PruductsContextProvider";
//Components
import Product from "./shared/Product";
//Style
import styles from "./Store.module.css"

const Store=()=>{
    const products=useContext(PruductsContext)
return(
    <div className={styles.container} >
        {
          products.map(product=><Product key={product.id} productData={product}/>)
        }
    </div>
)
}
export default Store;