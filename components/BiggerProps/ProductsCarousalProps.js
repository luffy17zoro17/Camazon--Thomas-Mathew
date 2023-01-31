import ImageProp from "../props/ImageProp";
import TextProp from "../props/TextProp";



const ProductsCarousalProp = ({isrcProd,titleBottom,detailsBottom,ialt,titleclassN,imgclassN}) => {
    return (
      <div className="">
  
        <ImageProp isrc={isrcProd} iht={`700`} iwd={`700`} imgclassN={imgclassN} ialt={ialt}/>
        <TextProp title={titleBottom} details={detailsBottom} titleclassN={titleclassN}
              tdivclassN={`text-xs flex items-center w-[12rem]`}/>

      </div>  
    );
}

export default ProductsCarousalProp;