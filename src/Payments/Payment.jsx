import React from 'react';
import styles from "./Payment.module.css";

function Payment() {
    return (
        <div className={styles.contaer1}>
        <div className={styles.container}>
            <h1>Payment Ragistration form</h1>
            <div className={styles.header}>
                <label>First Name </label>
                <input className={styles.input1} type="text"
                 name="firstname" id="name" placeholder="Enter the First Name " />
            </div>
            <div className={styles.l1}>
                <label>Last Name </label>
                <input className={styles.input2} type="text"
                 name="Lastname" id="name" placeholder="Enter the Last Name" />
            </div>
            <div className={styles.g}>
                <label>Gmail </label>
                <input className={styles.input3} type="Gamil"
                 name="gmail" placeholder="Enter the gmail" />
            </div>
            <div className={styles.Ad}>
                <label>Adhar Number  </label>
                <input className={styles.input4} type="Number"
                  placeholder="Enetr the Adhar Number" />
            </div>
            <div className={styles.ph}>
                <label>phone Number </label>
                <input className={styles.input5} type="Number"
                 placeholder="Enter the Phone Number"/>
            </div>
            <div className={styles.g1}>
                    <legend className={styles.legend}>Gender:</legend>
                    <div className={styles.maleBoth}>

                      <p>male<input className={styles.male} type="radio" name="Gender" id="male"/></p>
                      <p>female<input className={styles.female} type="radio" name="Gender" id="male"/></p>
                    </div>
            </div>
            <div className={styles.A}>
                <label>Address </label>
                <textarea className={styles.input6} type="text" name="Address" id="Address"
                 placeholder="Enetr the Address" rows="3"
                cols ="50"/>
            </div>
            <div className={styles.P}>
                <label>Pincode</label>
                <input className={styles.input7} type="number" name="Pincode"
                 id="Pincode" placeholder="Enetr the pincode "/>
            </div>
             <div className={styles.Ca}>
                 <label>Card Type</label>
                 <select className={styles.select}>
                     <option>Select a card Type</option>
                     <option>MasterCard</option>
                     <option>Rupay</option>
                     <option>Visa</option>
                     <option>CarditCard</option>
                 </select>
             </div>
             <div className={styles.CN}>
                 <label>Card Number</label>
                 <input className={styles.input8} type="number" name="card_number"
                  placeholder="Enter the Card Number"/>
             </div>
             <div className={styles.Ex}>
                 <label>Expiration Date</label>
                 <input className={styles.input9} type="date" 
                 name="Exp_date" id="Exp_date" placeholder="Enter the Expiration Date"/>
             </div>
             <div className={styles.Cv}>
                 <label>Cvv Number</label>
                 <input className={styles.input2} type="password"
                  name="Cvv_number" id="Cvv_Number" placeholder="Enter the Cvv number"/>
             </div>
        </div>
        </div>
    )
}

export default Payment
