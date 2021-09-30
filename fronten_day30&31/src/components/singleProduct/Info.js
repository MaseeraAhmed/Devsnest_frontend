import { Box, Button, Divider, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React from 'react';
import ReactHtmlParser from "react-html-parser";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    

    root: {
        color: '#777'
    },
    ratingBox: {
        margin: '10px 0',
        padding: '0 5px'
    },
    star: {
        padding: '0 5px',
        borderLeft: "1px solid #777"
    }

}));

function Info({product,onAddToCart}) {
    const handleAddToCart = () => onAddToCart(product.id, 1);
    const classes = useStyles();
    const history = useHistory();

    const handleCatagory = (categories) => {
        let allCategoriesName = []
        categories.forEach((category) => (
            allCategoriesName.push(category.name)
        ))
        return allCategoriesName
    }

    return (
        <Grid
            container
            item
            direction={'column'}
            style={{ height: '100%' }}
            sm={5}
        >
            <Box mt={2}>
                <Typography variant={'h4'}>{product.name.split(', ')[1]}</Typography>
                <Typography variant={'h6'} className={classes.root}>{product.name.split(', ')[0]}</Typography>
                <Grid container item alignItems={'center'} className={classes.ratingBox}>
                    <Rating name="read-only" value={5} readOnly/>
                    <Typography variant={'body1'} className={classes.star}>1 Rating</Typography>
                </Grid>
                <Divider/>

                <Grid container style={{margin: '10px 0'}}>
                    <Typography variant='p' style={{display: 'inline-block'}}>
                        <strong>Availability : </strong> In Stock ( {product.inventory.available} items)
                    </Typography>
                </Grid>

                <Typography variant='h4' style={{ margin: '10px 0',
                fontWeight: 'bold'}}>Rs. {product.price.raw}</Typography>
                <Typography variant='body1' style={{ color: '#03a685' }}>inclusive of all taxes</Typography>
                <Grid container style={{ margin: '15px 0 0 0' }}>
                    <Button variant={'contained'} color={'primary'} style={{ marginTop: 'auto', marginRight: '5px' }}
                    onClick={handleAddToCart}>Add
                        To
                        Cart</Button>
                    <Button variant={'contained'} color={'secondary'} style={{ marginTop: 'auto' }}
                    onClick={() => history.push('/checkout')}
                    >Buy Now</Button>
                </Grid>
                {/* <AddToWishListButton product_id={id}/> */}
                <Divider/>

                <Typography variant={'h5'} style={{ margin: '10px 0' }}><strong>Product Description
                    :</strong></Typography>


                <Typography variant={'body1'}>
                    {ReactHtmlParser(product.description)}
                </Typography>
                <Divider style={{margin: '10px 0'}}/>
                <Grid container style={{margin: '10px 0'}}>
                    <Typography variant='p' style={{display: 'inline-block'}}>
                        <strong>Categories :</strong>
                    </Typography>
                    {
                        handleCatagory(product.categories).map((item, index)=>(
                            <Link href="#" key={index} style={{margin: '0 2px'}} >
                                {item}{" "}
                            </Link>
                        ))
                    }
                </Grid>


            </Box>


        </Grid>
    );
}

export default Info;