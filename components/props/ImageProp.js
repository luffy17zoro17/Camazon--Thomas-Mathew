
import Image from "next/image";

const ImageProp = ({isrc,iht,iwd,imgclassN,ialt,idivclassN}) => {
    return (
      <div className={idivclassN}>
        {isrc ? (
          <Image
            src={isrc}
            height={iht}
            width={iwd}
            className={imgclassN}
            alt={ialt}
          />  
        ) : (<div></div>)} 
      </div>  
    );
}

export default ImageProp;