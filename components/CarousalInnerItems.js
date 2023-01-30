import FourSquaresProp from "./BiggerProps/FourSquaresProp";
import SingleSquareProp from "./BiggerProps/SingleSquareProp";





const CarousalInnerItems = () => {
    return (
  
     <div className="flex 
       mt-[-30.5rem]
       w-screen justify-center"> 
      <div className="flex gap-[1vw] flex-wrap justify-center
        ">
        <SingleSquareProp
           title={`Products by Amazing Karigiriwallahs`}
           isrc={`https://images.unsplash.com/photo-1652598631616-3f5f4d2cfbd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`}
           bottomTitle={`See all`}
           imgclassN={`object-cover h-[20.5rem] w-[19rem] mb-2`}
           
        />
        <FourSquaresProp
         title={`Top rated, premium quality | Camazon Brands & more`}
         titleOne={`Up to 50% off | Home & kitchen`}
         titleTwo={`Up to 60% off | Electronic accessories`}
         titleThree={`Up to 50% off | Daily essentials`}
         titleFour={`Starting ₹399 | Fashion essentials`}
         isrcOne={`https://images.unsplash.com/photo-1600369672770-985fd30004eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2017&q=80`}
         isrcTwo={`https://images.unsplash.com/photo-1643513473450-f2b4a0ee4fbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80`}
         isrcThree={`https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}
         isrcFour={`https://images.unsplash.com/photo-1639752567895-656101fd55c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80`}
         imgclassN={`object-cover h-[7rem] w-[10rem] mb-2`}
         bottomTitle={`See all`}
         squareclassN={`w-[8.5rem]`}
        />
        <FourSquaresProp
         title={`Ethnic collection`}
         titleOne={`Sarees`}
         titleTwo={`Kurti's`}
         titleThree={`Men's wear`}
         titleFour={`Handwoven dupattas`}
         isrcOne={`https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`}
         isrcTwo={`https://images.unsplash.com/photo-1597983073750-16f5ded1321f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`}
         isrcThree={`https://images.unsplash.com/photo-1559582798-678dfc71ccd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80`}
         isrcFour={`https://images.unsplash.com/photo-1652691870050-3d19c036da95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`}
         imgclassN={`object-cover h-[7rem] w-[10rem] mb-2`}
         bottomTitle={`See all`}
         squareclassN={`w-[8.5rem]`}
        
        />
        <FourSquaresProp
         title={`Footwear and fashion accessories`}
         titleOne={`Dupatta & stoles`}
         titleTwo={`Men's footwear`}
         titleThree={`Women's footwear`}
         titleFour={`Jewellery`}
         isrcOne={`https://images.unsplash.com/photo-1607735296005-813485a93737?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80`}
         isrcTwo={`https://images.unsplash.com/photo-1546367564-ade1880f8921?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80`}
         isrcThree={`https://images.unsplash.com/photo-1574413230119-f302e1c9035d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`}
         isrcFour={`https://images.unsplash.com/flagged/photo-1570055349452-29232699cc63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`}
         imgclassN={`object-cover h-[7rem] w-[10rem] mb-2`}
         bottomTitle={`See all`}
         squareclassN={`w-[8.5rem]`}
        />
      </div> 
     </div>  
    );
}

export default CarousalInnerItems;