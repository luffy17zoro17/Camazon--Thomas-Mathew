import ImageProp from "../props/ImageProp";
import TextProp from "../props/TextProp";




const SingleSquareProp = ({title,titleclassN,isrc,imgclassN,bottomTitle,
                          squareclassN}) => {
    return (
        <div className="relative bg-white shadow shadow-black
         rounded-lg
         w-[21rem] justify-center gap-4
        p-3">
          <div>
           <TextProp title={title} titleclassN={`p-3 font-semibold text-xl`}/>
           <div className="text-xs flex justify-center gap-4 flex-wrap">
             <div className={squareclassN}>
              <ImageProp
                 isrc={isrc}
                 iht={`800`}
                 iwd={`800`}
                 ialt={`one`}
                 imgclassN={imgclassN}
              />
              
             </div>
           </div>
          </div>
          <TextProp title={bottomTitle} 
          titleclassN={`text-[0.85rem] text-cyan-500 pl-[0.5rem] pt-2`}/>
        </div>   
    );
}

export default SingleSquareProp;