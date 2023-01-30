import ImageProp from "../props/ImageProp";
import TextProp from "../props/TextProp";




const FourSquaresProp = ({title,titleOne,titleTwo,titleThree,titleFour,
         bottomTitle,isrcOne,isrcTwo,isrcThree,isrcFour,imgclassN,
         squareclassN
       }) => {
    return (
     <div className="relative bg-white shadow shadow-black
      rounded-lg
      w-[21rem] justify-center gap-4 p-3">
       <div className="pb-[3rem]">
        <TextProp title={title} titleclassN={`p-3 font-semibold text-xl`}/>
        <div className="text-xs flex justify-center gap-[1.4vw] flex-wrap">
          <div className={squareclassN}>
           <ImageProp
              isrc={isrcOne}
              iht={`500`}
              iwd={`500`}
              ialt={`one`}
              imgclassN={imgclassN}
           />
           <TextProp title={titleOne}/>  
          </div>
          <div className={squareclassN}>
           <ImageProp
              isrc={isrcTwo}
              iht={`500`}
              iwd={`500`}
              ialt={`two`}
              imgclassN={imgclassN}
           />
           <TextProp title={titleTwo}/>  
          </div>
          <div className={squareclassN}>
           <ImageProp
              isrc={isrcThree}
              iht={`500`}
              iwd={`500`}
              ialt={`three`}
              imgclassN={imgclassN}
           />
           <TextProp title={titleThree}/>  
          </div>
          <div className={squareclassN}>
           <ImageProp
             isrc={isrcFour}
             iht={`500`}
             iwd={`500`}
             ialt={`four`}
             imgclassN={imgclassN}
           />
           <TextProp title={titleFour}/>  
          </div>
        </div>
       </div>
       <TextProp title={bottomTitle} titleclassN={`text-[0.85rem] text-cyan-500 absolute bottom-5 px-[0.5vw]`}/>
     </div>   
    );
}


export default FourSquaresProp;