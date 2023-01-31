
import { useDispatch, useSelector } from "react-redux";
import ProductsCarousalProp from "./BiggerProps/ProductsCarousalProps";
import ButtonProp from "./props/ButtonProp";
import TextProp from "./props/TextProp";

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { nextRepur, prevRepur, selectRepur } from "@/reducers/repurchase/repurchaseSlice";



const RepurchasedList = [
    {
        id:1,       
        isrcProd:`https://images.unsplash.com/photo-1594311431552-1cde4f4d1891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`,
        ialt:`lotion`,
     
    },
    {
        id:2,
      
        isrcProd:`https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2008&q=80`,
        ialt:`perfume`,
       
       
    },
    {
        id:3,
      
        isrcProd:`https://images.pexels.com/photos/2517881/pexels-photo-2517881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        ialt:`lipstick`,
        
      
    },
    {
        id:4,
     
        isrcProd:`https://images.pexels.com/photos/2633986/pexels-photo-2633986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        ialt:`eye liner`,
        
      
    },
    {
        id:5,
       
        isrcProd:`https://images.pexels.com/photos/5217930/pexels-photo-5217930.jpeg?auto=compress&cs=tinysrgb&w=1600`,
        ialt:`dust cleaner`,
        
     
    },
    {
        id:6,
     
        isrcProd:`https://images.unsplash.com/photo-1672924119335-b86e2107fd53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`,
        ialt:`window cleaner`,
      
       
    },
    {
        id:7,
        isrcProd:`https://images.unsplash.com/photo-1617220376311-1b90accbb9e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`,
        ialt:`make up brush`,
       
      
    },
    {
        id:8,
        isrcProd:`https://images.unsplash.com/photo-1570283698449-7ab2095b6f28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
        ialt:`toothbrush`,
     
     
    },
    {
        id:9,
    
        isrcProd:`https://images.unsplash.com/photo-1617825295690-28ae56c56135?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`,
        ialt:`Soap`,
        
   
    },
    {
        id:10,
       
        isrcProd:`https://images.unsplash.com/photo-1622614835318-7926e29f013c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80`,
        ialt:`handwash`,
      
  
    },



    {
        id:11,

        isrcProd:`https://images.pexels.com/photos/7319324/pexels-photo-7319324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        ialt:`paperbag`,
      
   
    },
    {
        id:12,
        
        isrcProd:`https://images.pexels.com/photos/6015268/pexels-photo-6015268.jpeg?auto=compress&cs=tinysrgb&w=1600`,
        ialt:`batteries`,
     
     
    },
   
]


const RepurchasedInHome = () => {
    const repur = useSelector(selectRepur);


    const dispatch = useDispatch();

    return (
       <div>
        <div className="flex justify-center"> 
        <TextProp title={`Frequently Repurchased in Home`} 
                titleclassN={`font-bold text-xl`}
                tdivclassN={`flex items-end gap-2 py-5
                absolute w-[68vw] z-10 lg:mt-[0.8rem]`}
        />
        </div>
        <div className="flex justify-center relative items-center">    
        <div className={`shadow shadow-black rounded ${repur===0 ? `overflow-x-scroll
        w-[75vw] border-x-[1.6rem] border-white bg-white lg:overflow-x-hidden
         lg:hover:overflow-x-scroll` : 
        `overflow-x-hidden w-[75vw] 
       border-x-[1.6rem] border-white bg-white`}`}>  

        <div className="bg-white pb-[2rem] mt-[6rem]">
            
            <div className={`flex gap-[1.5vw] 
                ${(repur ===0) ? (`transform translate-x-[0rem] scroll-smooth scroll-auto
                transition ease-out-in delay-200 duration-1000`) : repur===1 ? (`transform translate-x-[-80rem] scroll-smooth scroll-auto
                transition ease-in-out delay-200 duration-1000`) : (repur===0) ? `transform translate-x-[80rem] scroll-smooth scroll-auto
                transition ease-in-out delay-200 duration-1000` : (repur===2) ? `transform translate-x-[-160rem] scroll-smooth scroll-auto
                transition ease-in-out delay-200 duration-1000` : (repur===1) ? `transform translate-x-[160rem] scroll-smooth scroll-auto
                transition ease-in-out delay-200 duration-1000` : `transform translate-x-[-80rem] scroll-smooth scroll-auto
                transition ease-in-out delay-200 duration-1000`}`}>

            {RepurchasedList.map((item)=>(
            <div key={item.id} className={``}>  
            <ProductsCarousalProp 
                imgclassN={`h-[10rem] w-[10rem] object-contain`}   
                isrcProd={item.isrcProd}
                ialt={item.ialt}
            />
            </div>
            ))}
            
            </div>
        </div>  
        </div> 
        <div className="absolute justify-between
            w-[73vw] items-center mt-[2rem] hidden xl:flex">
            <ButtonProp bclassN={`rounded-l-lg scale-[2] bg-white
                shadow shadow-black
                ${repur===0 ? `opacity-30` : `flex text-pink-500 hover:text-green-400`}`} 
            bfunc={()=>dispatch(prevRepur())} icon={<ArrowLeftIcon/>}/>
            <ButtonProp bclassN={`bg-white rounded-r-lg scale-[2]
                shadow shadow-black
                ${repur===1 ? `opacity-30` : `flex text-pink-500 hover:text-green-400`}`} 
            bfunc={()=>dispatch(nextRepur())} icon={<ArrowRightIcon/>}/>
        </div> 
        
        </div> 
       </div> 
    );
}

export default RepurchasedInHome;