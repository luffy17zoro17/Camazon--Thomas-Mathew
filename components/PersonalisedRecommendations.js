import TextProp from "./props/TextProp";



const PersonalisedRecommendations = () => {
    return (
     <div className="flex justify-center text-center bg-white mt-5 flex-col">   
      <div className="border rounded-md my-4 w-full flex justify-center">
       <div className="w-[15rem]"> 
        <div className="space-y-2">
         <TextProp 
            title={`See personalized recommendations`}
            titleclassN={`text-sm py-2`}
            details={`Sign In`}
            detailclassN={`px-4 py-[0.4rem] rounded-md font-bold text-xs
             bg-gradient-to-t from-yellow-400 via-orange-300 to-yellow-300
             border border-orange-400`}
         />
         <div className="">
            <TextProp 
              title={`New customer?`}
              details={`Start here.`}
              detailclassN={`text-cyan-600`}
              tdivclassN={`flex text-xs justify-center pb-2 gap-1`}
              
            />
         </div>
        </div>
       </div> 
       
      </div>  
      <TextProp
           title={`Back to top`}
           titleclassN={`text-sm flex justify-center w-full left-0 
              mt-[2rem] py-4 bg-gray-700 text-white`}
        /> 
     </div> 
    );
}

export default PersonalisedRecommendations;