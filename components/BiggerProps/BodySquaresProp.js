import FourSquaresProp from "./FourSquaresProp";
import SingleSquareProp from "./SingleSquareProp";


const BodySquaresProp = ({title,titleOne,titleTwo,titleThree,titleFour,isrcOne,isrcTwo,isrcThree,
                        isrcFour,singleTitle,singleiSrc,titleSec,titleOneSec,titleTwoSec,
                         titleThreeSec,titleFourSec,isrcOneSec,isrcTwoSec,isrcThreeSec,
                        isrcFourSec,titleThird,titleOneThird,titleTwoThird,titleThreeThird,
                        titleFourThird,isrcOneThird,isrcTwoThird,isrcThreeThird,isrcFourThird,
                        }) => {
    return (
     
    <div className="flex justify-center"> 
      <div className="flex gap-[1vw] flex-wrap justify-center">
        
        <FourSquaresProp
         title={title}
         titleOne={titleOne}
         titleTwo={titleTwo}
         titleThree={titleThree}
         titleFour={titleFour}
         isrcOne={isrcOne}
         isrcTwo={isrcTwo}
         isrcThree={isrcThree}
         isrcFour={isrcFour}
         imgclassN={`object-cover h-[7rem] w-[10rem] mb-2`}
         bottomTitle={`See all`}
         squareclassN={`w-[8.5rem]`}
        />

        <SingleSquareProp
           title={singleTitle}
           isrc={singleiSrc}
           bottomTitle={`See all`}
           imgclassN={`object-cover h-[18rem] w-[19rem] mb-2`}
           
        />


        <FourSquaresProp
         title={titleSec}
         titleOne={titleOneSec}
         titleTwo={titleTwoSec}
         titleThree={titleThreeSec}
         titleFour={titleFourSec}
         isrcOne={isrcOneSec}
         isrcTwo={isrcTwoSec}
         isrcThree={isrcThreeSec}
         isrcFour={isrcFourSec}
         imgclassN={`object-cover h-[7rem] w-[10rem] mb-2`}
         bottomTitle={`See all`}
         squareclassN={`w-[8.5rem]`}
        />

        <FourSquaresProp
         title={titleThird}
         titleOne={titleOneThird}
         titleTwo={titleTwoThird}
         titleThree={titleThreeThird}
         titleFour={titleFourThird}
         isrcOne={isrcOneThird}
         isrcTwo={isrcTwoThird}
         isrcThree={isrcThreeThird}
         isrcFour={isrcFourThird}
         imgclassN={`object-cover h-[7rem] w-[10rem] mb-2`}
         bottomTitle={`See all`}
         squareclassN={`w-[8.5rem]`}
        />

   
      </div> 
    </div>    
    
    );
}


export default BodySquaresProp;

