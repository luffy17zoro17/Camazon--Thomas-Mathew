import { nextGrocery, prevGrocery, selectGrocery } from "@/reducers/repurchase/repurchaseGrocerySlice";
import { useDispatch, useSelector } from "react-redux";
import ProductsCarousalProp from "./BiggerProps/ProductsCarousalProps";
import ButtonProp from "./props/ButtonProp";
import TextProp from "./props/TextProp";

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';



const GroceriesList = [
    {
        id:1,
      
        isrcProd:`https://images.unsplash.com/photo-1624684244440-1130c3b65783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1970&q=80`,
        ialt:`peanut butter`,
      
     
    },
    {
        id:2,
       
        isrcProd:`https://images.unsplash.com/photo-1667670994176-927057f0d84a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
        ialt:`periods care tea`,
       
       
    },
    {
        id:3,
       
        isrcProd:`https://images.unsplash.com/photo-1637527843617-faa69ecf4a58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80`,
        ialt:`cookie`,
        
      
    },
    {
        id:4,
        isrcProd:`https://images.unsplash.com/photo-1620189507195-68309c04c4d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
        ialt:`almond`,
     
      
    },
    {
        id:5,
      
        isrcProd:`https://images.unsplash.com/photo-1600952841320-db92ec4047ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80`,
        ialt:`doritos chips`,
       
     
    },
    {
        id:6,
        isrcProd:`https://images.unsplash.com/photo-1569790554690-1c0877b2fc6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2087&q=80`,
        ialt:`sauce`,
        
    },
    {
        id:7,
        isrcProd:`https://images.unsplash.com/photo-1611801444181-7c151f0ee57e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80`,
        ialt:`macaroons`,
       
      
    },
    {
        id:8,
      
        isrcProd:`https://images.unsplash.com/photo-1607103058047-5c121f279a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
        ialt:`pickle`,
     
     
    },
    {
        id:9,
       
        isrcProd:`https://images.unsplash.com/photo-1622768521708-dbbe2db92d1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`,
        ialt:`mango drink`,
   
   
    },
    {
        id:10,
       
        isrcProd:`https://images.unsplash.com/photo-1668089968498-c05baaf1ad31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80`,
        ialt:`jam`,
        
  
    },



    {
        id:11,
    
        isrcProd:`https://images.unsplash.com/photo-1646753233147-50f9e3155830?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`,
        ialt:`cookie dough`,
       
   
    },
    {
        id:12,
        
        isrcProd:`https://images.unsplash.com/photo-1632054010678-7f2e5a1a7355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80`,
        ialt:`nescafe`,
     
     
    },
    {
        id:13,
       
        isrcProd:`https://images.unsplash.com/photo-1587790032594-babe1292cede?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2038&q=80`,
        ialt:`oats`,
      
      
    },
    {
        id:14,
        isrcProd:`https://images.unsplash.com/photo-1524638067-feba7e8ed70f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1536&q=80`,
        ialt:`turmeric lemon`,
        
      
    },
    {
        id:15,    
        isrcProd:`https://images.unsplash.com/photo-1597614506902-2e35ab724713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1970&q=80`,
        ialt:`ice cream`,
      
     
    },
    {
        id:16,
      
        isrcProd:`https://images.unsplash.com/photo-1499096382193-ebb232527fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80`,
        ialt:`marshmallow`,
        
      
    },
    {
        id:17,
     
        isrcProd:`https://images.unsplash.com/photo-1519420573924-65fcd45245f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80`,
        ialt:`cocoa butter`,
      
       
    },
    {
        id:18,
   
        isrcProd:`https://images.unsplash.com/photo-1559738928-5d5dc5c2458d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80`,
        ialt:`eggs`,
       
       

    },


]





const RepurchasedInGrocery = () => {
    const grocery = useSelector(selectGrocery);


    const dispatch = useDispatch();
    return (
     
      <div>  
        <div className="flex justify-center">
        <TextProp title={`Frequently repurchased in Grocery`} details={`Visit the store`} titleclassN={`font-bold text-xl`}
               detailclassN={`text-xs text-cyan-400 pb-1`} 
               tdivclassN={`flex items-end gap-2 py-5
               absolute w-[68vw] z-10 mt-[1rem] lg:mt-[1.8rem]`}/>
         </div>      
        <div className="flex justify-center relative py-[1rem] items-center">    
        <div className={`${grocery===0 ? `hover:overflow-x-auto overflow-x-hidden w-[75vw] 
       border-x-[1.6rem] border-white bg-white` : `overflow-x-hidden w-[75vw] 
       border-x-[1.6rem] border-white bg-white`}`}>  

         <div className="bg-white pb-[2rem] mt-[6rem]">
            
             <div className={`flex gap-[1.5vw] 
               ${(grocery ===0) ? (`transform translate-x-[0rem] scroll-smooth scroll-auto
               transition ease-out-in delay-200 duration-1000`) : grocery===1 ? (`transform translate-x-[-80rem] scroll-smooth scroll-auto
                transition ease-in-out delay-200 duration-1000`) : (grocery===0) ? `transform translate-x-[80rem] scroll-smooth scroll-auto
                transition ease-in-out delay-200 duration-1000` : (grocery===2) ? `transform translate-x-[-160rem] scroll-smooth scroll-auto
                transition ease-in-out delay-200 duration-1000` : (grocery===1) ? `transform translate-x-[160rem] scroll-smooth scroll-auto
                transition ease-in-out delay-200 duration-1000` : `transform translate-x-[-80rem] scroll-smooth scroll-auto
                transition ease-in-out delay-200 duration-1000`}`}>
   
             {GroceriesList.map((item)=>(
             <div key={item.id} className={``}>  
             <ProductsCarousalProp
                 imgclassN={`h-[10rem] w-[10rem] object-cover`}
                 isrcProd={item.isrcProd}
                 ialt={item.ialt}
   
             />
             </div>
             ))}
             
             </div>
         </div>  
        </div> 
        <div className="flex absolute justify-between
              w-[73vw] items-center mt-[2rem] hidden xl:flex">
              <ButtonProp bclassN={`rounded-l-lg scale-[2] bg-white
                 shadow shadow-black
               ${grocery===0 ? `opacity-30` : `flex text-pink-500 hover:text-green-400`}`} 
              bfunc={()=>dispatch(prevGrocery())} icon={<ArrowLeftIcon/>}/>
              <ButtonProp bclassN={`bg-white rounded-r-lg scale-[2]
                shadow shadow-black
               ${grocery===2 ? `opacity-30` : `flex text-pink-500 hover:text-green-400`}`} 
              bfunc={()=>dispatch(nextGrocery())} icon={<ArrowRightIcon/>}/>
        </div> 
        
       </div>  
     </div>   
    );
}

export default RepurchasedInGrocery