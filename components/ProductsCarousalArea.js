import RepurchasedInGrocery from "./RepurchasedInGrocery";
import RepurchasedInHome from "./RepurchasedInHome";
import TodaysDeals from "./TodaysDeals";






const ProductsCarousalArea = () => {
    return (
       <div>
         <TodaysDeals/>
        <RepurchasedInHome/>
        <RepurchasedInGrocery/>
       </div> 
    );
}

export default ProductsCarousalArea;