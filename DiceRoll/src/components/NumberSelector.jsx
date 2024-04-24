
import styled from 'styled-components'

const NumberSelector = ({setError,error,SelecteNo,SetSelectedNo}) => {

    const arr=[1,2,3,4,5,6];
    const noSelector=(value)=>{
        SetSelectedNo(value);
    setError("");
    }
    

  return (
    <Number>
        <p className='error'>{error}</p>
    <div className='flex'>
        {
        arr.map((value, i)=>(<Cube 
            isSelected={value===SelecteNo}
            
            key={i} 
        onClick={()=>noSelector(value)}>{value}</Cube>))
    }
     </div>
     <p>Number Select</p>
     </Number>
  )
}

export default NumberSelector

const Number=styled.div`

display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap: 20px;
}
p{
    font:30px;
    font-weight: 500;
}
.error{
    color: red;
    padding-bottom: 10px;
}

`

const Cube =styled.div`
    height: 50px;
    width: 50px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    background-color: ${(props)=>(props.isSelected?"black":"white")};
 color: ${(props)=>(props.isSelected?"white":"black")};
`