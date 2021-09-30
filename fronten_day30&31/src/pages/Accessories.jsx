import React, { useEffect, useState } from "react";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import { commerce } from '../lib/commerce';

const Accessories = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const categories="accessories"
  const [metaData, setMetaData] = useState([])

  const fetchCategoryProducts = async () => {
   
    const response = await commerce.products.list({ category_slug: categories}) ;
    const {data, meta} = response
    setProducts(data)
}

console.log(products)

useEffect(() => {
  fetchCategoryProducts();

}, []);


  return (
  <>
  <Grid col={4} mdCol={2} smCol={1} gap={20}>
     {products.map((product,index)=>(
              <ProductCard 
              key={index}
              product={product} 
              onAddToCart={onAddToCart}
              img={product.media.source}
              />
     ))}
     </Grid>

  </>
     )}

export default Accessories;
