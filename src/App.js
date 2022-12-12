import Carousel from "./Carousel/Carousel";
import Section1 from "./section1/Section1";
import ExploreCategories from "./ExploreCategories/ExploreCategories";
import TopSellingProduct from "./TopSellingProduct/TopSellingProduct";
import NewestArrival from "./NewestArrival/NewestArrival";
import SubscribeNewsLetter from "./SubscribeNewsLetter/SubscribeNewsLetter";
import Footer from "./Footer/Footer";
import Account from "./Account/Account";

export default function App() {
  return (
    <div>
      <Carousel />
      <Section1 />
      <ExploreCategories />
      <TopSellingProduct />
      <NewestArrival />
      <SubscribeNewsLetter />
      <Footer />
      <Account />
    </div>
  );
}
