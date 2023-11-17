// pages/index.js
import Head from 'next/head';
import NavBar from '/Users/senthis/Desktop/GPTexperiments/code-weaver/components/Nav.jsx';
import HeroSection from '/Users/senthis/Desktop/GPTexperiments/code-weaver/components/Hero.jsx';
import ReviewsSection from '/Users/senthis/Desktop/GPTexperiments/code-weaver/components/Reviews.jsx';
import FeaturedProductsSection from '/Users/senthis/Desktop/GPTexperiments/code-weaver/components/Featured.jsx';
import MediaFeatureSection from '/Users/senthis/Desktop/GPTexperiments/code-weaver/components/MediaFeature.jsx';
import FooterSection from '/Users/senthis/Desktop/GPTexperiments/code-weaver/components/Footer.jsx';

export default function Home() {
  return (
    <>
      <Head>
        <title>Social AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <HeroSection />
      <MediaFeatureSection />
      <FeaturedProductsSection />
      <ReviewsSection />
      <FooterSection />
    </>
  );
}