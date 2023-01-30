
import ProductsCarousalProp from "./BiggerProps/ProductsCarousalProps";
import ButtonProp from "./props/ButtonProp";
import TextProp from "./props/TextProp";

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useDispatch, useSelector } from "react-redux";

import { nextFurniture, prevFurniture, selectFurniture } from "@/reducers/furniture/furnitureSlice";





const FurnituresList = [
    {
        id:1,
       
        isrcProd:`https://images.pexels.com/photos/271696/pexels-photo-271696.jpeg`,
        ialt:`dining room`,
      
     
    },
    {
        id:2,
       
        isrcProd:`https://images.unsplash.com/photo-1558898434-af897d9ac0a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
        ialt:`sofa`,
     
       
    },
    {
        id:3,     
        isrcProd:`https://images.unsplash.com/photo-1573104049264-5324ea0027d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80`,
        ialt:`teapo`,
    },
    {
        id:4,
        isrcProd:`https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2009&q=80`,
        ialt:`sofa2`,
     
    },
    {
        id:5,
        isrcProd:`https://images.unsplash.com/photo-1558211583-d26f610c1eb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=80`,
        ialt:`sofa3`,
        
     
    },
    {
        id:6,
      
        isrcProd:`https://images.pexels.com/photos/3935321/pexels-photo-3935321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        ialt:`dining room2`,
       
       
    },
    {
        id:7,
     
        isrcProd:`https://images.unsplash.com/photo-1579656381254-1a60dc1ee3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`,
        ialt:`drawer`,
        
    },
    {
        id:8,
       
        isrcProd:`https://images.unsplash.com/photo-1593319634705-4f92f42a7fb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80`,
        ialt:`table chair`,
     
     
    },
    {
        id:9,
        isrcProd:`https://images.unsplash.com/photo-1441338167148-d09eab9deed6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1972&q=80`,
        ialt:`table chair3`,
        
    },
    {
        id:10,
        isrcProd:`https://images.pexels.com/photos/9877527/pexels-photo-9877527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        ialt:`table3`,
    },



    {
        id:11,
        isrcProd:`https://images.unsplash.com/photo-1612908317776-a3afde8232fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
        ialt:`drawer5`,
   
    },
    {
        id:12,
        isrcProd:`https://images.pexels.com/photos/8135298/pexels-photo-8135298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        ialt:`settea`,
     
    },
    {
        id:13,
        isrcProd:`https://images.pexels.com/photos/7005283/pexels-photo-7005283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        ialt:`closet`,
      
    },
    {
        id:14,
        isrcProd:`https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        ialt:`sofa5`,
      
      
    },
    {
        id:15,
   
        isrcProd:`https://images.pexels.com/photos/6527064/pexels-photo-6527064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        ialt:`closet2`,
      
     
    },
    {
        id:16,
        isrcProd:`https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        ialt:`pc table`,
      
    },



]




const FurnitureCarousal = () => {
    const furniture = useSelector(selectFurniture);
    const dispatch = useDispatch();
    return (
     <div> 
       <div className="flex justify-center">   
        <TextProp title={`Up to 60% off | Curated furniture picks for your home`} 
        titleclassN={`font-bold text-xl`}
        
         tdivclassN={`flex items-end gap-2 py-5
             absolute w-[68vw] mt-[2rem] z-10`}/>  
       </div>       

    <div className="flex justify-center items-center">  
     <div className={furniture===0 ? `flex justify-center relative pt-[1rem] pb-[2rem] items-center border-x-[1.6rem]
      border-white w-[75vw] overflow-x-hidden hover:overflow-x-auto bg-white my-[1rem]` : 
      `flex justify-center relative pt-[1rem] pb-[2rem] items-center border-x-[1.6rem]
      border-white w-[75vw] bg-white my-[1rem] overflow-x-auto xl:overflow-x-hidden`}>   

     <div className={`${furniture===0 ? `hover:overflow-x-auto overflow-x-hidden w-[75vw] 
       border-x-[1.6rem] border-white bg-white` : `overflow-x-hidden w-[75vw] 
       border-x-[1.6rem] border-white bg-white`}`}>  
     
       

      <div className={`bg-white pb-[2rem] h-[15rem]`}>
      
          <div className={`flex gap-[1.5vw] absolute mt-[5rem]
            ${(furniture ===0) ? (`transform translate-x-[0rem] scroll-smooth scroll-auto
            transition ease-out-in delay-200 duration-1000`) : furniture===1 ? (`transform translate-x-[-80rem] scroll-smooth scroll-auto
             transition ease-in-out delay-200 duration-1000`) : (furniture===0) ? `transform translate-x-[80rem] scroll-smooth scroll-auto
             transition ease-in-out delay-200 duration-1000` : (furniture===2) ? `transform translate-x-[-160rem] scroll-smooth scroll-auto
             transition ease-in-out delay-200 duration-1000` : (furniture===1) ? `transform translate-x-[160rem] scroll-smooth scroll-auto
             transition ease-in-out delay-200 duration-1000` : `transform translate-x-[-80rem] scroll-smooth scroll-auto
             transition ease-in-out delay-200 duration-1000`}`}>

          {FurnituresList.map((item)=>(
          <div key={item.id} className={`flex items-center h-[10rem] overflow-y-hidden
             `}>  
          <ProductsCarousalProp         
              isrcProd={item.isrcProd}
              imgclassN={`
              
              ${(item.id===7 || item.id===8 || item.id===9 || 
                 item.id===10 || item.id===12) 
                ? `object-cover h-[10rem]` : `object-contain`}`}
              ialt={item.ialt}

          />
          </div>
          ))}
          
          </div>
          
          
      </div>  
     </div> 
     
     
    </div> 
    <div className="flex absolute justify-between w-[73vw] items-center hidden xl:flex">
           <ButtonProp bclassN={`rounded-l-lg scale-[2] bg-white 
              shadow shadow-black
            ${furniture===0 ? `opacity-30` : `flex text-pink-500 hover:text-green-400`}`} 
           bfunc={()=>dispatch(prevFurniture())} icon={<ArrowLeftIcon/>}/>
           <ButtonProp bclassN={`bg-white rounded-r-lg scale-[2]
             shadow shadow-black
            ${furniture===2 ? `opacity-30` : `flex text-pink-500 hover:text-green-400`}`} 
           bfunc={()=>dispatch(nextFurniture())} icon={<ArrowRightIcon/>}/>
     </div> 
   </div> 
   </div>

    );
}

export default FurnitureCarousal;