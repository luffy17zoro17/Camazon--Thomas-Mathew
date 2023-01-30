import { decrement, increment, selectCount } from "@/reducers/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import ButtonProp from "./props/ButtonProp";
import ImageProp from "./props/ImageProp";

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import TextProp from "./props/TextProp";

import CarousalInnerItems from "./CarousalInnerItems";



const ImageList = [
    {
        id:0,
        url:`https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        alt:'happyshopping'
    },
    {
        id:1,
        url:`https://cdn.pixabay.com/photo/2019/10/25/11/07/halloween-4576779_960_720.png`,
        alt:'halloweensale'
    },
    {
        id:2,
        url:`https://images.pexels.com/photos/5868275/pexels-photo-5868275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        alt:'black-friday',
    },
    {
        id:3,
        url:`https://cdn.pixabay.com/photo/2019/12/09/06/00/black-friday-4682673_960_720.png`,
        alt:'sale3',
    }
]









const ImageCarousal = () => {

    const count = useSelector(selectCount);

    const dispatch = useDispatch();
    return (
    <div className="flex justify-center mt-[4rem] relative mb-[1rem]">
     <div className="overflow-x-hidden w-full">
      <div className="flex
         w-[420vw]"> 
        {ImageList.map((item)=>(
          <div key={item.id} className={`${count===1 ? `transform translate-x-[-108vw] scroll-smooth scroll-auto
          transition ease-out-in delay-200 duration-1000` : count===2 ? `transform translate-x-[-211vw] scroll-smooth scroll-auto
          transition ease-out-in delay-200 duration-1000` : count === 3 ? `transform translate-x-[-318vw] scroll-smooth scroll-auto
          transition ease-out-in delay-200 duration-1000` : `transform translate-x-[0vw] scroll-smooth scroll-auto
          transition ease-out-in delay-200 duration-1000`}`}>
          <ImageProp
             isrc={item.url}
              
             iht={`11500`}
             iwd={`11500`}
             imgclassN={`object-cover h-[48rem] w-[300rem]`}
             idivclassN={``}  
             ialt={item.alt}
          />
          </div>
        ))}
        <div className="flex gap-[4vw] absolute top-[2rem] w-full left-0
           justify-center">
         <TextProp titleclassN={`shadow shadow-black ${count===0 ? `w-[3rem] h-[0.5rem] bg-green-400` : `w-[3rem] h-[0.5rem] bg-white`}`}/>
         <TextProp titleclassN={`shadow shadow-black ${count===1 ? `w-[3rem] h-[0.5rem] bg-green-400` : `w-[3rem] h-[0.5rem] bg-white`}`}/> 
         <TextProp titleclassN={`shadow shadow-black ${count===2 ? `w-[3rem] h-[0.5rem] bg-green-400` : `w-[3rem] h-[0.5rem] bg-white`}`}/> 
         <TextProp titleclassN={`shadow shadow-black ${count===3 ? `w-[3rem] h-[0.5rem] bg-green-400` : `w-[3rem] h-[0.5rem] bg-white`}`}/>
        </div>
        
       
       
       {/** plan on adding effects later */}
        <div className={`   
             ${count===0 ? `bg-gradient-to-t from-gray-200 via-bg-gray-200 to-transparent  
               absolute top-0 bottom-0 w-full h-[50rem]` : ``}
             ${count===1 ? `bg-gradient-to-t from-gray-200 via-bg-gray-200 to-transparent 
               absolute top-0 bottom-0 w-full h-[50rem]` : ``}
             ${count===2 ? `bg-gradient-to-t from-gray-200 via-bg-gray-200 to-transparent 
               absolute top-0 bottom-0 w-full h-[50rem]` : ``}
             ${count===3 ? `bg-gradient-to-t from-gray-200 via-bg-gray-200 to-transparent 
               absolute top-0 bottom-0 w-full h-[50rem]` : ``}
              
             `}
        />
      
        <div className="absolute top-[8rem] flex z-20 gap-[50vw] text-green-400
           flex justify-center w-full left-0">
          <ButtonProp bfunc={()=>dispatch(decrement())} 
          icon={<KeyboardDoubleArrowLeftIcon/>}
          bclassN={`scale-[3.5] shadow-sm shadow-cyan-400
           hover:shadow-orange-300 hover:text-orange-400 rounded-l-full`}
          />
          <ButtonProp bfunc={()=>dispatch(increment())} 
          icon={<KeyboardDoubleArrowRightIcon/>}
          bclassN={`scale-[3.5] shadow-sm shadow-cyan-400 
          hover:shadow-orange-300 hover:text-orange-400 rounded-r-full`}
          />
        </div>
      </div>  
      <div className="flex justify-center z-30
          border-green-400 w-full left-0">
       <div className="">     
         <CarousalInnerItems/>
        </div>
      </div>
     </ div>
    </div> 
  
    );
}

export default ImageCarousal;