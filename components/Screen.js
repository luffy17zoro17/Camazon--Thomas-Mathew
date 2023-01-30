import AdPoster from "./AdPoster";
import BodySquares from "./BodySquares";
import BodySquares2 from "./BodySquares2";
import BodySquares3 from "./BodySquares3";
import ImageCarousal from "./ImageCarousal";
import PersonalisedRecommendations from "./PersonalisedRecommendations";

import ProductsCarousalArea from "./ProductsCarousalArea";
import ProductsCarousalArea2 from "./ProductsCarousalArea2";




const Screen = () => {
    return (
      <div>
        <ImageCarousal/>
        <BodySquares/>
        <ProductsCarousalArea/>
        <BodySquares2/>
        <ProductsCarousalArea2/>
        <AdPoster/>
        <BodySquares3/>
        <PersonalisedRecommendations/>
      </div>  
    );
}

export default Screen;