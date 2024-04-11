import React from 'react'
import styles from './shoppingcart.module.css'
import { MdOutlineShoppingCart } from "react-icons/md";
export default function Header() {
  return (
    <div className={styles.wrapperheadfoot}>
      <div className={styles.header}>
      <p className={styles.title}>SHOPPING CART</p>
        <button className={styles.cart}><MdOutlineShoppingCart /></button>
      </div>
    </div>
  )
}