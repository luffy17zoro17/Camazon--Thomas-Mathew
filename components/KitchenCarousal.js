
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
        isrcProd:`https://images.unsplash.com/photo-1567763745030-bfe9c51bec27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80`,
        ialt:`bowl`,
     
    },
    {
        id:2,
      
        isrcProd:`https://images.unsplash.com/photo-1624819107687-15524ecf555a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`,
        ialt:`plates`,
       
       
    },
    {
        id:3,
      
        isrcProd:`https://images.unsplash.com/photo-1481400239811-cd7d97777edc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
        ialt:`love bowl`,
        
      
    },
    {
        id:4,
     
        isrcProd:`https://images.unsplash.com/photo-1621494042364-e0e6ba89c21d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`,
        ialt:`plates2`,
        
      
    },
    {
        id:5,
       
        isrcProd:`https://images.unsplash.com/photo-1638009665822-8fc2822573e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`,
        ialt:`plates3`,
        
     
    },
    {
        id:6,
     
        isrcProd:`https://images.unsplash.com/photo-1565972093658-620985899236?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
        ialt:`bowl with legs`,
      
       
    },
    {
        id:7,
        isrcProd:`https://images.unsplash.com/photo-1586641368721-bb2659c90315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80`,
        ialt:`glass`,
       
      
    },
    {
        id:8,
        isrcProd:`https://images.unsplash.com/photo-1528113205084-1f6d08db49e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
        ialt:`cup`,
     
     
    },
    {
        id:9,
    
        isrcProd:`https://images.unsplash.com/photo-1588867702719-969c8ac733d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80`,
        ialt:`glass3`,
        
   
    },
    {
        id:10,
       
        isrcProd:`https://images.unsplash.com/photo-1595788238417-b909a98cf393?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1954&q=80`,
        ialt:`glass4`,
      
  
    },



    {
        id:11,

        isrcProd:`https://images.unsplash.com/photo-1499028203764-8669cfd05719?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`,
        ialt:`plate4`,
      
   
    },
    {
        id:12,
        
        isrcProd:`https://images.unsplash.com/photo-1615860291946-62f346ab7e63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80`,
        ialt:`cup2`,
     
     
    },
   
]


const KitchenCarousal = () => {
    const repur = useSelector(selectRepur);


    const dispatch = useDispatch();

    return (
       <div> 
        <div className="flex justify-center"> 
            <TextProp title={`Up to 60% off | Shop for new kitchenware from local shops`} 
             titleclassN={`font-bold text-xl`}
             tdivclassN={`flex items-end gap-2 py-5
             absolute w-[68vw] z-10 lg:mt-[0.8rem]`}
              />
        </div> 
        <div className="flex justify-center relative items-center">    
        <div className={`${repur===0 ? `hover:overflow-x-auto overflow-x-hidden w-[75vw] 
       border-x-[1.6rem] border-white bg-white` : `overflow-x-hidden w-[75vw] 
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

export default KitchenCarousal;