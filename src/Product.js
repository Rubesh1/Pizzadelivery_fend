import React from 'react';
import './Product.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Product() {
  return (
    <div className='Product'>
        <div className="Product_Container">
            <div className="item-1">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="./Pizza-Product.jpg"
                        alt=" "
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Pizza
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        I Love Pizza
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Add On's</Button>
                        <Button size="small">Extra-Cheese</Button>
                        <Button size="small">Add To Cart</Button>
                    </CardActions>
                </Card>
            </div>
            <div className="item-2">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="./Pizza-Product.jpg"
                        alt=" "
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Pizza
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        I Love Pizza
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Add On's</Button>
                        <Button size="small">Extra-Cheese</Button>
                        <Button size="small">Add To Cart</Button>
                    </CardActions>
                </Card>
            </div>
            <div className="item-2">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="./Pizza-Product.jpg"
                        alt=" "
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Pizza
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        I Love Pizza
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Add On's</Button>
                        <Button size="small">Extra-Cheese</Button>
                        <Button size="small">Add To Cart</Button>
                    </CardActions>
                </Card>
            </div>
        </div> 
    </div>
  )
}

export default Product