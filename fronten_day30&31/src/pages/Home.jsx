import React from "react";
import { Link } from "react-router-dom";
import heroSliderData from "../assets/fake-data/hero-slider";
import policy from "../assets/fake-data/policy";
// import Tablet from "../components/Tabs";
import banner from "../assets/images/banner.png";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import PolicyCard from "../components/PolicyCard";
import ProductCard from "../components/ProductCard";
import Section, { SectionBody, SectionTitle } from "../components/Section";


const Home = ({ products, onAddToCart }) => {
  console.log(products);
  return (
    <Helmet title="Home">
      {/* hero slider */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={false}
        timeOut={5000}
      />
      {/* end hero slider */}

      {/* policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link key={index} to="/policy">
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end policy section */}
      {/* <Tablet /> */}
      {/* best selling section */}
      <Section>
        <SectionTitle>Latest products</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {products.slice(16,20).map((product,index)=>(
              <ProductCard 
              key={index}
              product={product} 
              onAddToCart={onAddToCart}
              img={product.media.source}
              />

            ))};
            {/* {productData.getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))} */}
          </Grid>
        </SectionBody>
      </Section>
      {/* end best selling section */}

      {/* new arrival section */}
      <Section>
        <SectionTitle>Our best seller</SectionTitle>
        <SectionBody>
          
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
          {products.slice(24,32).map((product,index)=>(
              <ProductCard 
              key={index}
              product={product} 
              onAddToCart={onAddToCart}
              img={product.media.source}
              />

            ))};
          </Grid>
        </SectionBody>
      </Section>
      {/* end new arrival section */}

      {/* banner */}
      <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner} alt="" />
          </Link>
        </SectionBody>
      </Section>
      {/* end banner */}

      {/* popular product section */}
      <Section>
        <SectionTitle>Products</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
          {products.slice(32,45).map((product,index)=>(
              <ProductCard 
              key={index}
              product={product} 
              onAddToCart={onAddToCart}
              img={product.media.source}
              />

            ))};
          </Grid>
        </SectionBody>
      </Section>

      {/* end popular product section */}
    </Helmet>
  );
};

export default Home;
