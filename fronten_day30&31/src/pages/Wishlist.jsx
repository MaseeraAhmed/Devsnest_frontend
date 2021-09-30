import React from "react";
import Button from "../components/Button";
import Grid from "../components/Grid";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import WishlistCard from "../components/WishlistCard";
import productData from "../assets/fake-data/products";

const Wishlist = () => {
  return (
    <div>
      <Section>
        <SectionTitle>Wishlist</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(12).map((item, index) => (
              <WishlistCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </div>
  );
};

export default Wishlist;
