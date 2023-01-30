



const ButtonProp = ({icon,bclassN,bfunc,bdivclassN,prevfunc,nextfunc}) => {
    return (
      <div className={bdivclassN}>   
          <button className={bclassN} onClick={bfunc}>
            {icon}
          </button>
      </div> 
    );
}
export default ButtonProp;