import React from 'react'
import {Card, CarMedia, CardContent, CardActions, Typegraphy,IconBotton} from "@material-ui/core";
import {AddShopping} from "@material-ui/icon";
import Products from './Products';

 const Products=({products}) =>{
    return (
        <Card className={classes.root}>
          <CarMedia className={classes.media} image="" title={products.name}/>
          <CardContent>
              <div className ={classes.CardContent}>
                  <Typegraphy varient ="h5" gutterBottom>
                   {products.name}
                  </Typegraphy>
                  <Typegraphy varient ="h5" gutterBottom>
                   {products.price}
                  </Typegraphy>

              </div>
          </CardContent>
        </Card>
    )
}

export default Products
