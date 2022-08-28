import React from 'react'

const Apnikachha = () => {
    return (
        <div>
         <h1>welcome to appana collage</h1>
         <p>i am prabhat <b>yjidjd ne mnkenj</b>kumari am done my graduation <i>in 2021 i am this time suffering in our carrier that</i> 
         i ankdjejb jgfjb dbcjdbjhiwlnfknojkeniojk </p>
         <ol type ="a"> 
             <li>mango</li>
             <li>banana</li>
             <li>orange</li>
             <li>guava</li>
             <li>papaya</li>
             <hr/>
             <ul>
                 <li>maggi recippe</li>
             </ul>
         </ol>
         <hr/>
         <table>
             <tr>
                 <th>Subject</th>
                 <th>theory</th>
                 <th>Pratical</th>
                 <th>total Marks</th>
                 <th>Grades</th>
             </tr>
             <tbody>
                 <tr>
                     <td>English</td>
                     <td>70</td>
                     <td>--</td>
                     <td>70</td>
                     <td>c</td>
                 </tr>
                 <tr>
                     <td>physics</td>
                     <td>80</td>
                     <td>10</td>
                     <td>90</td>
                     <td>A</td>
                 </tr>
                 <tr>
                     <td>maths</td>
                     <td>95</td>
                     <td>--</td>
                     <td>95</td>
                     <td>A1</td>
                 </tr>
                 <tr>
                     <td>Chemestry</td>
                     <td>75</td>
                     <td>15</td>
                     <td>90</td>
                     <td>A</td>
                 </tr>
                 <tr>
                     <td>hindi</td>
                     <td>80</td>
                     <td>--</td>
                     <td>80</td>
                     <td>B1</td>
                 </tr>
             </tbody>
         </table>
        <form action =""/>
        <h2>Paymont from</h2>
        <h3>contact Information</h3>
        <p>first Name:<input type="text" name="name"></input></p>
        <p>last Name:<input type="text" name="name"></input></p>
         <fieldset>
             <legend>Gender*</legend>
             <p>
                 male<input type ="radio" name ="gender" id="male" required/>
                 female<input type ="radio" name ="gender" id="male" required/>
             </p>
         </fieldset>
         <p>Address*:<textarea name ="Address" id="address" cols="100" row="8"/></p>
         <p>pincode*:<textarea name ="pincode" id="pincode" required/></p>
         <p>CardType:
             <select name ="card_type" id ="card_type" required>
                 <option value="">Select a card type</option>
                 <option value="visa">visa</option>
                 <option value="rupay">rupay</option>
                 <option value="mastercard">mastercard</option>
                 <option value="debitcard">debitcard</option>
             </select>
             <p>
                 card Number:* 
                 <input type="number" name="card_number" id="card_number" required/>
             </p>
             <p>
                 Expiration date:* 
                 <input type="date" name="exp_date" id="exp_date" required/>
             </p>
             <p>
                 cvv:
                 <input type="Password" name="cvv" id="cvv" required/>
                 </p>
             <input type="submit" value="paynow"/>
         </p>
       </div>
    )
    }

export default Apnikachha
