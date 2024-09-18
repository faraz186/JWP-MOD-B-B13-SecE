import { Grid } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'   
import Cards from './Card';
import Header from './Header';

const Cart = () => {
    const {addtoCart,isLoading,isError} = useSelector(state=>state.addToCartReducer);      

    console.log(addtoCart)
  return (
    <>   
        <Header />
    <Grid container>   
      {isLoading ? <h1>Loading...</h1>:addtoCart.map((e,i)=>{
          return(
              <Grid style={{marginTop:25}} key={i} item lg={3}>
                <Cards removeCart={true} product={e} key={i} title={e.title}  desc={e.description} img={e.image}/>
                </Grid>
          
        )
          })
          
        }
    </Grid>
        </>
  )
}

export default Cart
