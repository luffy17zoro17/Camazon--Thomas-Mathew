import FourSquaresProp from "./BiggerProps/FourSquaresProp";
import SingleSquareProp from "./BiggerProps/SingleSquareProp";




const BodySquares2 = () => {
    return (

     <div className="flex justify-center"> 
      <div className="flex gap-[1vw] flex-wrap justify-center">

        <SingleSquareProp
           title={`Up to 60% off | Fitness essentials to set up your home`}
           isrc={`https://images.unsplash.com/photo-1558017487-06bf9f82613a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1970&q=80`}
           bottomTitle={`See all`}
           imgclassN={`object-cover h-[19rem] w-[19rem] mb-2`}
           
        />
        
        <FourSquaresProp
         title={`Bring joy with the perfect wedding gifts`}
         titleOne={`Dinner set`}
         titleTwo={`Kitchen appliances`}
         titleThree={`Jewellery`}
         titleFour={`Gift Cards`}
         isrcOne={`https://images.unsplash.com/photo-1485178075098-49f78b4b43b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`}
         isrcTwo={`https://images.pexels.com/photos/211761/pexels-photo-211761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
         isrcThree={`https://images.unsplash.com/photo-1600862754152-80a263dd564f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80`}
         isrcFour={`https://images.unsplash.com/photo-1563302111-eab4b145e6c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`}
         imgclassN={`object-cover h-[7rem] w-[10rem] mb-2`}
         bottomTitle={`See all`}
         squareclassN={`w-[8.5rem]`}
        />

        <SingleSquareProp
           title={`Discover your home`}
           isrc={`https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`}
           bottomTitle={`See all`}
           imgclassN={`object-cover h-[21rem] w-[19rem] mb-2`}
           
        />


        <FourSquaresProp
         title={`Up to 60% off | Tools & home improvement`}
         titleOne={`Cleaning accessories
             Spin mops, Wipes & more`}
         titleTwo={`Drill machines, tool kits & more`}
         titleThree={`Bathroom accessories`}
         titleFour={`Extension boards, plugs & more`}
         isrcOne={`https://images.pexels.com/photos/6160302/pexels-photo-6160302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
         isrcTwo={`https://images.pexels.com/photos/4792478/pexels-photo-4792478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
         isrcThree={`https://images.unsplash.com/photo-1595428774277-f20931fb8db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`}
         isrcFour={`https://images.unsplash.com/photo-1596812782753-e6b21762a90c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80`}
         imgclassN={`object-cover h-[7rem] w-[10rem] mb-2`}
         bottomTitle={`See more`}
         squareclassN={`w-[8.5rem]`}
        />
   
      </div> 
     </div>    
    
    );
}


export default BodySquares2;