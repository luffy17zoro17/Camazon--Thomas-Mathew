import TextProp from "./props/TextProp";
import Link from "next/link";



const FooterBottom = () => {
    return (
      <div className="text-xs bg-black text-white flex justify-center text-gray-400 flex-col items-center
          ">
        <div className="flex gap-[4rem] justify-center flex-wrap pt-[5rem] px-[4rem]
            xl:w-[45vw]">
          <ul>
            <TextProp title={`AbeBooks`} titleclassN={`text-white`} />
            <li>Books, art</li>
            <li>& collectibles</li>
          </ul>  

          <ul>  
            <TextProp title={`Camazon Web Services`} titleclassN={`text-white`}/>
            <li>Scalable Cloud</li>
            <li>Computing Services</li>
          </ul>  
            
          <ul>  
            <TextProp title={`Audible`} titleclassN={`text-white`}/>
            <li>Download</li>
            <li>Audio Books</li>
          </ul>  	

          <ul>  	
            <TextProp title={`DPReview`} titleclassN={`text-white`}/>
            <li>Digital</li>
            <li>Photography</li>
          </ul>  
            
          <ul>  
            <TextProp title={`IMDb`} titleclassN={`text-white`}/>
            <li>Movies, TV</li>
            <li>& Celebrities</li>
          </ul>  
            
          <ul>  
            <TextProp title={`Shopbop`} titleclassN={`text-white`}/>
            <li>Designer</li>
            <li>Fashion Brands</li>
          </ul>  
            
          <ul>  
            <TextProp title={`Camazon Business`} titleclassN={`text-white`}/>
            <li>Everything For</li>
            <li>Your Business</li>
          </ul>  
            
          <ul>  
            <TextProp title={`Prime Now`} titleclassN={`text-white`}/>
            <li>2-Hour Delivery</li>
            <li>on Everyday Items</li>
          </ul>  
            
          <ul>
            <TextProp title={`Camazon Prime Music`} titleclassN={`text-white`}/>
            <li>90 million songs, ad-free</li>
            <li>Over 15 million podcast episodes</li>
          </ul>  
        </div>

        <div className="text-center py-[5rem]">
          <div className="flex">  
           <TextProp title={`Conditions of Use & Sale`}/>
           <TextProp title={`Privacy Notice`}/>
           <TextProp title={`Interest-Based Ads`} />
          </div> 
          <TextProp title={`© 1996-2023, Camazon.com, Inc. or its affiliates`}/>
          <Link className="text-lg text-green-300" href={`https://www.linkedin.com/in/thomas-mathew-b26b87253/`}>
            Created by&nbsp;---{`>`} <b className="text-purple-500 hover:underline
              hover:font-mono hover:text-red-400">Thomas Mathew</b></Link>
        </div>
      </div>  
    );
}

export default FooterBottom