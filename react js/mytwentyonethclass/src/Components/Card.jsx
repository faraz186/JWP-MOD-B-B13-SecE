import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { addtoCart,removeSingleCart } from '../store/slices/addToCartSlice';

export default function Cards({title,img,desc,product,removeCart}) {
    const dispatch = useDispatch()
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 160 }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {desc.slice(0,99)}
        </Typography>
      </CardContent>
      <CardActions>

        {
            removeCart ? <Button onClick={()=>{
                dispatch(removeSingleCart(product))                              
            }} size="small" variant="contained">Remove Cart</Button> : 
        <Button onClick={()=>{
            dispatch(addtoCart(product))                              
        }} size="small" variant="contained">Add to Cart</Button>
        }
      </CardActions>
    </Card>
  );
}
