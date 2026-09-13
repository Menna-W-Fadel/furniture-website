import HeroSlider from "../components/hero_slider";
import FeaturesBar from "../components/FeaturesBar";
import ExploreCategories from "../components/ExploreCategories";
import DiscountBanner from "../components/DiscountBanner";
const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <FeaturesBar />
      <ExploreCategories></ExploreCategories>
      <DiscountBanner></DiscountBanner>
    </div>
  );
};

export default HomePage;
