import React from 'react';
import Grid from "@material-ui/core"
 
const products =[
    {id: 1, name: "Shoes", description: "running shoes.", price: "$5"},
    {id: 2, name: "Macbook", description: "Apple macbook.", price: "$10"},
];
const Product =() => {
    return (
        <main>
          <Grid container justify ="center" spacing ={4}>
           {product.map((product)=>(
             <Grid item key={product.id} xs={12} sm={4} lg={3}>
                 <Products product={products}/>
                 </Grid>
            ) )}
          </Grid>
        </main>
    )
}

export default Product;
