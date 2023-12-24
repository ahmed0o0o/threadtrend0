import NewCollections from "../Components/NewCollecions/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Offer from "../Components/Offer/Offer";
import Popular from "../Components/Popular/Popular";
import Hero from "../Components/hero/Hero";

const Shop = () => {
  return (
    <main className="home">
        <Hero />
        <Popular />
        <Offer />
        <NewCollections />
        <NewsLetter />
    </main>
  )
}

export default Shop;
