import React from 'react'
import styles from "./Practice.module.css";

const Pratice = () => {
    return (
        <div className={styles.inputBody}>  
            <div className={styles.header}>
                <h1>Create poll</h1>
                <p>

                    <img src="/images/icons8-close-24.svg" alt=""/>
                </p>
            </div>
            <hr/>
            <div>
                <p className ={styles.img1}>
                    <img className={styles.img} src="/images/pp.jpg" alt=""/>
                    <p>hi everyones
                        <br/>
                        <select name="name" id="name">
                            <option>Anyone</option>
                            <option>private</option>
                        </select>
                    </p>
                </p>
            </div>
        <div>
            <label>Question:
            </label>
            <br/>
                <textarea className={styles.input1} type ="text" name ="Question" placeholder="Ask question" rows="3" cols="30s"/>
        </div>
                    <div className={styles.option1}>
                    <label>option 1:
                    </label>
                    <br/>
                        <input className={styles.input2} type ="text" name = "name" placeholder="Add first  option"/>
                </div>
                        <div className={styles.option2}>
                        <label>option 2:
                        </label>
                        <br/>
                            <input className ={styles.input3} type ="text" name ="name" placeholder ="Add second option"/>
                    </div>
                    <div className={styles.option3}>
                    <label>option 3:
                    </label>
                    <br/>
                        <input className ={styles.input4} type ="text" name ="name" placeholder="Add third option"/>
                        </div>
                        <div className={styles.option4}>
                        <label>option 4:
                        </label>
                        <br/>
                            <input className={styles.input5} type ="text" name ="Question" placeholder ="Add fourth option"/>
                    </div>
                    <div className={styles.option2}>poll duration:
                    <br/>
                     <select className ={styles.s1} type="poll duration" id="poll duration" required>
                     <option >Add question</option>
                     <option>2 day</option>
                     <option>3 day</option>
                     <option>4 day</option>
                     </select>
                     <br/>
                     <button className ={styles.b1} type="submitss">Post</button>
                    </div>
                    </div>
    )
}
export default Pratice
