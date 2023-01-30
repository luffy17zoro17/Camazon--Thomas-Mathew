


const InputProp = ({inclassN,inplaceholder,indivclassN}) => {
    return (
      <div className={indivclassN}>
        <input
          placeholder={inplaceholder}
          className={inclassN}
        />
      </div>  
    );
}

export default InputProp;