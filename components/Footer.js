import IconProp from "./props/IconProp";
import TextProp from "./props/TextProp";

import LanguageIcon from '@mui/icons-material/Language';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import FooterBottom from "./FooterBottom";

const Footer = () => {
    return (
      <div>  
      <div className="bg-gray-800 text-gray-300 text-xs flex justify-center border-b
        border-green-400">
       <div className="gap-[5vw] py-[3rem] lg:flex"> 
        <div className="flex justify-evenly mb-11 lg:gap-[5vw]">
            
           <ul className="space-y-2 flex flex-col items-between">
             <TextProp title={`Get to Know Us`} titleclassN={`text-[0.9rem] font-bold text-white`}/>
             <li>About Us</li>
             <li>Careers</li>
             <li>Press Releases</li>
             <li>Amazon Science</li>
           </ul>
           <ul className="space-y-2">
             <TextProp title={`Connect with Us`} titleclassN={`text-[0.9rem] font-bold text-white`}/>
             <li>Facebook</li>
             <li>Twitter</li>
             <li>Instagram</li>
           </ul>
        </div>
        
        <div className="flex gap-[5vw]">    
            <ul className="space-y-2">
              <TextProp title={`Make Money with Us`} titleclassN={`text-[0.9rem] font-bold text-white`}/>
                <li>Sell on Camazon</li>
                <li>Sell under Camazon Accelerator</li>
                <li>Protect and Build Your Brand</li>
                <li>Camazon Global Selling</li>
                <li>Become an Affiliate</li>
                <li>Fulfilment by Camazon</li>
                <li>Advertise Your Products</li>
                <li>Camazon Pay on Merchants</li>
            </ul>
            <ul className="space-y-2">
              <TextProp title={`Let Us Help You`} titleclassN={`text-[0.9rem] font-bold text-white`}/>
                <li>COVID-19 and Camazon</li>
                <li>Your Account</li>
                <li>Returns Centre</li>
                <li>100% Purchase Protection</li>
                <li>Camazon App Download</li>
                <li>Camazon Assistant Download</li>
                <li>Help</li>
            </ul>
         </div> 
        </div> 
      </div>  
      <div className="flex justify-center flex-col items-center 
        bg-gray-800 text-gray-300 text-sm">
        <div className="flex items-end gap-[5vw] py-[2rem]">
         <TextProp title={`amazon`} titleclassN={`border-l-[0.2rem] border-pink-500
            text-pink-300 pl-1 text-xl rounded-l-xl`}/>
         <div className="flex border rounded-sm items-end py-1 px-3 gap-2">
            <IconProp icon={<LanguageIcon/>}/>
             <TextProp title={`English`}/>
            <IconProp icon={<UnfoldMoreIcon/>}/>
         </div>
        </div>

        <div>
            <ul className="flex flex-wrap justify-center gap-4 
              text-xs w-[48vw] pb-[3rem]">
               <li>Australia</li>
               <li>Brazil</li>
               <li>Canada</li>
               <li>China</li>
               <li>France</li>
               <li>Germany</li>
               <li>Italy</li>
               <li>Japan</li>
                <li>Mexico</li>
                <li>Netherlands</li>
                <li>Poland</li>
                <li>Singapore</li>
                <li>Spain</li>
                <li>Turkey</li>
                <li>United Arab Emirates</li>
                <li>United Kingdom</li>
                <li>United States</li>
            </ul>
        </div> 
       </div>
       <FooterBottom/>
      </div>
    );
}

export default Footer;