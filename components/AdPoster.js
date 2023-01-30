import ImageProp from "./props/ImageProp";





const AdPoster = () => {
    return (
      <div className="flex justify-center pt-[1rem]">
        <ImageProp
          isrc={`https://cosplayers.gr/wp-content/uploads/2022/10/One-Piece-Special-Event-Banner.jpg`}
          iht={`800`}
          iwd={`800`}
          imgclassN={`object-cover h-[15rem] w-[62rem]`}
        />
      </div>  
    );
}

export default AdPoster