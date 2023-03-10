import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import IconProp from './props/IconProp';
import TextProp from './props/TextProp';


const NavBottomList = [
    {
        id:1,
        title:"All",
        icon:<MenuIcon/>,
    },
    {
        id:2,
        title:"Camazon ciniTV",
        icon:'',
    },
    {
        id:3,
        title:"Sell",
        icon:'',
    },
    {
        id:4,
        title:"Best Sellers",
        icon:'',
    },
    {
        id:5,
        title:"Mobiles",
        icon:'',
    },
    {
        id:6,
        title:"Today's Deals",
        icon:'',
    },
    {
        id:7,
        title:"Customer Service",
        icon:'',
    },
    {
        id:8,
        title:"Electronics",
        icon:'',
    },
    {
        id:9,
        title:"Prime",
        icon:<KeyboardArrowDownIcon/>,
    },
    {
        id:10,
        title:"Fashion",
        icon:'',
    },
    {
        id:11,
        title:"Camazon Pay",
        icon:'',
    },
    {
        id:12,
        title:"Home & Kitchen",
        icon:'',
    },
    {
        id:13,
        title:"New Releases",
        icon:'',
    },
    {
        id:14,
        title:"Computers",
        icon:'',
    },
 
]



const NavBottom = () => {
    return (
     <div className='relative w-[100%] top-[4rem] z-20 overflow-x-hidden
         overflow-x-scroll shadow-md shadow-black 
         lg:overflow-x-hidden
         lg:hover:overflow-x-auto'>    
      <div className='flex w-[119rem] py-2 text-xs bg-gray-700
         text-white z-30 justify-between items-center px-[1.5rem]'>  
      <div className='flex justify-center gap-[1rem]'>
        {NavBottomList.map((item)=>(
          <div key={item.id} className={`flex items-center`}>
            <TextProp title={item.title} titleclassN={item.id===1 ? `pl-10 font-medium cursor-pointer hover:text-yellow-300` 
            : `cursor-pointer hover:underline hover:text-yellow-300`}/>
            <IconProp icon={item.icon} icoclassN={item.id===1 ? `absolute cursor-pointer` : `cursor-pointer`}/>
          </div>    
        ))}
      </div>  
      <TextProp
         details={`Watch One piece Red, the new movie for free on ciniTv`}
         detailclassN={`cursor-pointer hover:underline hover:text-red-300`}
       />
      </div>
     </div> 
    );
}

export default NavBottom;