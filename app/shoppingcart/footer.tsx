import React from 'react'
import styles from './shoppingcart.module.css';
import { BiHandicap } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { IoAlertCircleOutline } from 'react-icons/io5';

export default function Footer() {
  return (
    <div className={styles.wrapperheadfoot}>
      <div className={styles.footer}>
        <div className={styles.disclaimer}>
        <p className={`${styles.disclaimertext} ${styles.alert}`}> <IoAlertCircleOutline color="rgba(208, 111, 26, 1)" /> </p>
        <p className={`${styles.disclaimertext} ${styles.textbolddis}`}>We refresh inventory number hourly. staff will let you know if there is any discrepancy</p>
        <p className={styles.cancel}><RxCross2 color="rgba(208, 111, 26, 1)"/>
        </p>
        </div>
        <div className={styles.footerbutton}>
        <button className={styles.paynowbutton}>Pay Now</button>
        <button className={styles.iconwheelchair}><BiHandicap/></button>
      </div>
       </div>
    </div>
  )
}
