import IconProp from "./props/IconProp";
import TextProp from "./props/TextProp";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InputProp from "./props/InputProp";
import TourIcon from '@mui/icons-material/Tour';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
    return (
      <div className="flex items-center justify-center fixed w-full top-0 
       h-[4rem] z-30 bg-black text-white text-xs shadow shadow-black">
        <div className="flex items-center absolute left-[1vw] gap-[1vw]
            ">
         <TextProp title={`amazon`} titleclassN={`border-l-[0.2rem] border-pink-500
            text-pink-300 pl-1 ml-1 text-xl rounded-l-xl`}/>
         <div className="items-center cursor-pointer hidden lg:flex lg:pl-4">
            <IconProp icon={<FmdGoodIcon/>}/>
            <TextProp title={`Hello`} titleclassN={`text-xs`} details={`Select your address`}
                 detailclassN={`font-bold hover:underline`}/>
         </div>
        </div> 
        
       
        <div className="absolute flex items-center border px-2 text-black
           py-[0.5rem] gap-1 bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-300
          rounded-xl w-[34vw] xl:w-[44vw]">
         <div className="flex items-center hidden lg:flex">    
           <TextProp title={`All`} titleclassN={`px-1 text-xs`}/>
           <IconProp icoclassN={`cursor-pointer`} icon={<KeyboardArrowDownIcon/>}/>   
         </div> 
         <InputProp
          inclassN={`w-[55vw] py-1 px-2 rounded-xl outline-none text-black
          shadow-inner shadow-gray-400 w-[23vw] sm:w-[26vw]
           md:w-[28vw] lg:w-[24vw] xl:w-[36vw]`}
          inplaceholder={`Search Camazon`}
         />
         <IconProp icoclassN={`pl-[0.5vw] cursor-pointer`} icon={<SearchIcon/>}/>
        </div>
       


       <div className="flex items-center absolute right-[1vw] gap-[1vw]"> 
        <div className="hidden items-center cursor-pointer lg:flex">
          <IconProp icon={<TourIcon/>}/>
          <TextProp title={`EN`}/>
          <IconProp icon={<KeyboardArrowDownIcon/>}/>
        </div>

        <div className="flex items-end pr-1 cursor-pointer">
           <TextProp title={`Hello, sign in`} detailclassN={`font-bold hover:underline`} details={`Account & Lists`}/>
           <IconProp icon={<KeyboardArrowDownIcon/>}/> 
        </div>

        <TextProp title={`Returns`} detailclassN={`font-bold hover:underline cursor-pointer`}
         details={`& Orders`} tdivclassN={`hidden xl:block`}/>
        
        <div className="flex items-end hidden cursor-pointer md:flex md:pr-2">
           <IconProp icon={<ShoppingCartIcon/>}/> 
           <TextProp title={`Cart`} titleclassN={`font-bold`}/>
        </div>
       </div> 
      </div>  
    );
}

export default Navbar;