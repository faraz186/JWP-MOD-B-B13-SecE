import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../store/slices/productSlice';
import Cards from './Card';
import { Box, Grid, Grid2 } from '@mui/material';
import Header from './Header';

const Home = () => {
  const {isLoading,isError,products}  = useSelector(state=>state.productReducers);

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchData())
  },[])

  return (
    <>
      <Header />
    <Grid container>
        {
          isLoading ? <h1>Loading...</h1> : 
          products.map((e,i)=>{
            return(
              <Grid style={{marginTop:25}}  key={i} item lg={3}>
                <Cards product={e} key={i} title={e.title}  desc={e.description} img={e.image}/>
                </Grid>
          
            )
          })
        }

</Grid>
        </>
  )
}

export default Home
