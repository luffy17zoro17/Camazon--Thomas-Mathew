import ProductsCarousalProp from "./BiggerProps/ProductsCarousalProps";
import ButtonProp from "./props/ButtonProp";
import TextProp from "./props/TextProp";

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useDispatch, useSelector } from "react-redux";
import { nextDeals, prevDeals} from "@/reducers/deals/dealsSlice";
import { selectDeal } from "@/reducers/deals/dealsSlice";



const ProductsList = [
    {
        id:1,
        titleBottom:`Up to 36% off`,
        isrcProd:`https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80`,
        ialt:`laptop`,
        details:`Deal of the Day`
     
    },
    {
        id:2,
        titleBottom:`Up to 77% off`,
        isrcProd:`https://images.unsplash.com/photo-1575054092299-4a300e7a2511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80`,
        ialt:`watch`,
        details:`Deal of the Day`
       
    },
    {
        id:3,
        titleBottom:`Up to 50% off`,
        isrcProd:`https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2107&q=80`,
        ialt:`laptop2`,
        details:`Deal of the Day`
      
    },
    {
        id:4,
        titleBottom:`Up to 20% off`,
        isrcProd:`https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
        ialt:`headphones`,
        details:`Deal of the Day`
      
    },
    {
        id:5,
        titleBottom:`Up to 36% off`,
        isrcProd:`https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
        ialt:`camera`,
        details:`Deal of the Day`
     
    },
    {
        id:6,
        titleBottom:`Up to 77% off`,
        isrcProd:`https://images.unsplash.com/photo-1594549181132-9045fed330ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80`,
        ialt:`adapter`,
        details:`Deal of the Day`
       
    },
    {
        id:7,
        titleBottom:`Up to 50% off`,
        isrcProd:`https://images.unsplash.com/photo-1626581806599-d12b0bbd4225?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80`,
        ialt:`streamCam`,
        details:`Deal of the Day`
      
    },
    {
        id:8,
        titleBottom:`Up to 20% off`,
        isrcProd:`https://images.unsplash.com/photo-1592156328697-079f6ee0cfa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80`,
        ialt:`fryingPan`,
        details:`Deal of the Day`
     
    },
    {
        id:9,
        titleBottom:`Up to 20% off`,
        isrcProd:`https://images.unsplash.com/photo-1511300961358-669ca3ad05af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1667&q=80`,
        ialt:`chordlessEarphone`,
        details:`Deal of the Day`
   
    },
    {
        id:10,
        titleBottom:`Up to 20% off`,
        isrcProd:`https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        ialt:`phone`,
        details:`Deal of the Day`,
  
    },



    {
        id:11,
        titleBottom:`Up to 20% off`,
        isrcProd:`https://images.unsplash.com/photo-1599409333465-8b0b9e905f37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
        ialt:`joystick`,
        details:`Deal of the Day`,
   
    },
    {
        id:12,
        titleBottom:`Up to 36% off`,
        isrcProd:`https://images.unsplash.com/photo-1615986200762-a1ed9610d3b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80`,
        ialt:`androidTv`,
        details:`Deal of the Day`,
     
    },
    {
        id:13,
        titleBottom:`Up to 77% off`,
        isrcProd:`https://images.unsplash.com/photo-1560671563-7a75c5838af3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`,
        ialt:`gamingPC`,
        details:`Deal of the Day`,
      
    },
    {
        id:14,
        titleBottom:`Up to 50% off`,
        isrcProd:`https://images.unsplash.com/photo-1590794056470-74f3ade8ddd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2051&q=80`,
        ialt:`cooker`,
        details:`Deal of the Day`,
      
    },
    {
        id:15,
        titleBottom:`Up to 20% off`,
        isrcProd:`https://images.pexels.com/photos/193057/pexels-photo-193057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        ialt:`printer`,
        details:`Deal of the Day`,
     
    },
    {
        id:16,
        titleBottom:`Up to 20% off`,
        isrcProd:`https://images.pexels.com/photos/343720/pexels-photo-343720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        ialt:`sunglasses`,
        details:`Deal of the Day`,
      
    },
    {
        id:17,
        titleBottom:`Up to 20% off`,
        isrcProd:`https://images.pexels.com/photos/264870/pexels-photo-264870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        ialt:`perfume`,
        details:`Deal of the Day`,
       
    },
    {
        id:18,
        titleBottom:`Up to 20% off`,
        isrcProd:`https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        ialt:`phone2`,
        details:`Deal of the Day`,
       

    },


]






const TodaysDeals = () => {

    const deal = useSelector(selectDeal);


    const dispatch = useDispatch();

    return (
   <div>     
    <div className="flex justify-center">
        <TextProp title={`Today's Deals`} titleclassN={`font-bold text-xl`}
          details={`See all deals`} detailclassN={`text-xs text-cyan-400 pb-1`} 
          tdivclassN={`flex items-end gap-2 mt-[2.8rem]
                absolute w-[68vw] z-10`}
        />
    </div>    
    <div className="flex justify-center relative py-[1rem] items-center">    

     <div className={`shadow shadow-black rounded
       ${deal===0 ? `overflow-x-scroll w-[75vw] 
       border-x-[1.6rem] border-white bg-white
       lg:overflow-x-hidden lg:hover:overflow-x-scroll` :
        `overflow-x-hidden w-[75vw] 
       border-x-[1.6rem] border-white bg-white`}`}>  

      <div className="pb-[2rem] mt-[6rem]">
          
          <div className={`flex gap-[1.5vw]
            ${(deal ===0) ? (`transform translate-x-[0rem] scroll-smooth scroll-auto
            transition ease-out-in delay-200 duration-1000`) : 
            deal===1 ? (`transform translate-x-[-80rem] scroll-smooth scroll-auto
             transition ease-in-out delay-200 duration-1000`) : (deal===0) ? `transform translate-x-[80rem] scroll-smooth scroll-auto
             transition ease-in-out delay-200 duration-1000` : (deal===2) ? `transform translate-x-[-160rem] scroll-smooth scroll-auto
             transition ease-in-out delay-200 duration-1000` : (deal===1) ? `transform translate-x-[160rem] scroll-smooth scroll-auto
             transition ease-in-out delay-200 duration-1000` : `transform translate-x-[-80rem] scroll-smooth scroll-auto
             transition ease-in-out delay-200 duration-1000`}`}>

          {ProductsList.map((item)=>(
          <div key={item.id} className={``}>  
          <ProductsCarousalProp
              titleBottom={item.titleBottom}
              isrcProd={item.isrcProd}
              ialt={item.ialt}
              imgclassN={`h-[10rem] w-[10rem] object-cover`}
              detailsBottom={item.details}
              titleclassN={`flex font-light rounded-sm px-1
              bg-red-400 py-1 my-2 mr-2`}

          />
          </div>
          ))}
          
          </div>
      </div>  
     </div> 
     <div className="flex absolute justify-between
           w-[73vw] items-center hidden xl:flex">
           <ButtonProp bclassN={`rounded-l-lg scale-[2] bg-white
              shadow shadow-black
            ${deal===0 ? `opacity-30` : `flex text-pink-500 hover:text-green-400`}`} 
           bfunc={()=>dispatch(prevDeals())} icon={<ArrowLeftIcon/>}/>
           <ButtonProp bclassN={`bg-white rounded-r-lg scale-[2]
             shadow shadow-black
            ${deal===2 ? `opacity-30` : `flex text-pink-500 hover:text-green-400`}`} 
           bfunc={()=>dispatch(nextDeals())} icon={<ArrowRightIcon/>}/>
     </div> 
     
    </div>  
   </div> 
    );
}


export default TodaysDeals;