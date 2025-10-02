import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import HomeSlider from "../components/HomeSlider";
import NewsLetter from "../components/Newsletter";
import OfferBanner from "../components/OfferBanner";

export default function Home() {
  return (
    <main>
      <HomeSlider />
      <Categories />
      <FeaturedProducts />
      <OfferBanner />
      <NewsLetter />
    </main>
  );
}
