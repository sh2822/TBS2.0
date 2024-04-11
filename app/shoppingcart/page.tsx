'use client'

import Image from "next/image";
import styles from "./shoppingcart.module.css";
import { FaRegCircle } from "react-icons/fa";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsRecordCircle } from "react-icons/bs";

export default function shoppingcart(){

    const [quantity, setQuantity] = useState(0);
    
    const increment = () => {
      if (quantity < 10) {
        setQuantity(prevQuantity => prevQuantity + 1);
      }
    };    
  
    const decrement = () => {
      setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));
    };

    const [quantity2, setQuantity2] = useState(0);
    
    const increment2 = () => {
      if (quantity2 < 10) {
        setQuantity2(prevQuantity => prevQuantity + 1);
      }
    };    
  
    const decrement2 = () => {
      setQuantity2(prevQuantity => Math.max(prevQuantity - 1, 0));
    };
  
  return(
    <div className={styles.main}>
      <div className={styles.submain}>
      <div className={styles.button}>
        <button className={styles.buttontag}>← BACK</button>
        <button className={styles.buttontag}>CLEAR CART</button>
      </div>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.tableborder}>
              <td className={`${styles.cell} ${styles.textbold}`}><Image src="/MOOSEHEAD1.jpg" alt="Vercel Logo" width={40} height={30} /></td>
              <td className={styles.cell}> <p className={styles.text1}>MOOSEHEAD LAGER <span className={styles.text2}>56 X Bottle 342ml</span></p> </td>
              <td className={`${styles.cell} ${styles.textbold}`}><p className={styles.text1}><span className={styles.text3}>$89.95</span> <span className={styles.text4}>$79.95</span></p></td>
              <td className={`${styles.cell} ${styles.textbold}`}>
              <div className={styles.divminusplus}>
              <p className={styles.spanborder}>
              <span className={styles.spanminusplus} onClick={decrement}>-</span>
              <span className={styles.spanminusplus}>{quantity}</span>
              <span className={styles.spanminusplus} onClick={increment}>+</span>
              </p>
              </div>
              
              </td>
              <td className={`${`${styles.cell} ${styles.textbold}`} ${styles.right}`}><button className={styles.buttondelete}><RiDeleteBin6Line /></button></td>
              </tr>

            <tr>
              <td className={`${styles.cell} ${styles.textbold}`}><Image src="/ice1.jpg" alt="Vercel Logo" width={40} height={30} /></td>
              <td className={`${styles.cell} ${styles.textbold}`}>2.7 Packaged Ice</td>
              <td className={`${styles.cell} ${styles.textbold}`}>$3.75</td>
              <td className={`${styles.cell} ${styles.textbold}`}>
              <div className={styles.divminusplus}>
              <p className={styles.spanborder}>
              <span className= {styles.spanminusplus} onClick={decrement2}>-</span>
              <span className={styles.spanminusplus}>{quantity2}</span>
              <span className={styles.spanminusplus} onClick={increment2}>+</span>
              </p>
              </div>
              </td>
              <td className={`${styles.cell} ${styles.textbold} ${styles.right}`}><button className={styles.buttondelete}><RiDeleteBin6Line /></button></td>
            </tr>
          </tbody>
        </table>
        <div>
        <button className={styles.button2}>DON'T FORGET THE ICE</button>
        </div>
      </div>

      <div className={styles.submain}>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.tableborder}>
            <td className={`${styles.cell} ${styles.left} ${styles.text}`}>Your Savings:</td>
            <td className={`${styles.cell} ${styles.center} ${styles.text}`}>$0.00</td>
            <td className={`${styles.cell} ${styles.right} ${styles.text}`}>
            <button className={styles.buttonExpand}>Expand ^</button>
            </td>
          </tr>
          <tr>
            <td className={`${styles.cell} ${styles.left} ${styles.text}`}> <p className={styles.ptag}> <BsRecordCircle className={styles.circletag} />Purchase bag (1 bag)</p></td>
            <td className={`${styles.cell} ${styles.center} ${styles.text}`}>$0.35</td>
            <td className={`${styles.cell} ${styles.right} ${styles.text}`}></td>
          </tr>
          <tr className={styles.tableborder}>
            <td className={`${styles.cell} ${styles.left} ${styles.text}`}><p className={styles.textspacing}>Bag Fee HST</p></td>
            <td className={`${styles.cell} ${styles.center} ${styles.text}`}>$0.10</td>
            <td className={`${styles.cell} ${styles.right} ${styles.text}`}></td>
          </tr>
          <tr className={styles.tableborder}>
            <td className={`${styles.cell} ${styles.left} ${styles.text}`}> <p className={styles.ptag}> <FaRegCircle className={styles.circletag1}/>I have my own bag</p></td>
            <td className={`${styles.cell} ${styles.center} ${styles.text}`}>-</td>
            <td className={`${styles.cell} ${styles.right} ${styles.text}`}></td>
          </tr>
          <tr>
            <td className={`${styles.cell} ${styles.textbold} ${styles.left}`}>Cart Total:</td>
            <td className={`${styles.cell} ${styles.textbold} ${styles.center}`}>$84.15</td>
            <td className={`${styles.cell} ${styles.textbold} ${styles.right}`}></td>
          </tr>
        </tbody>
      </table>
      </div>
  </div>
  )
}
