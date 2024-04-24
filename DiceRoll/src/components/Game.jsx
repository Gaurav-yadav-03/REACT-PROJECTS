import React, { useState } from 'react'
import Score from './Score'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { Button } from '../styled/Button'
import Rules from './Rules'

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color:black;
  &:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
   }
 
`;


const Game = () => {
  const[SelecteNo,SetSelectedNo]=useState();
  const[currentDice,setCurrentDice]=useState(1);
  const[score,setScore]=useState(0);
  const[error,setError]=useState();
  const[showRules,setShowRules]=useState(false);
  
  const randomNO=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
 }
 const roleDice=()=>{
  if(!SelecteNo) {
    setError("You have not selected any number")
    return}
   
    const randomNumber=randomNO(1,7);
    setCurrentDice((prev)=>randomNumber)

  

    if(SelecteNo===randomNumber){
      setScore((prev)=>prev+randomNumber)
    }else(
      setScore((prev)=>prev-2)
    )
    SetSelectedNo(undefined)
 }

 const resetScore=()=>{
  setScore(0)
 }
  return (
    <MainContainer>
      <div className='style'>
    <Score score={score}/>
    <NumberSelector
   error={error}
   setError={setError}
     SelecteNo={SelecteNo}
     SetSelectedNo={SetSelectedNo}
    
    />
    </div>
    <RoleDice
    currentDice={currentDice}
   roleDice={roleDice}
    />
    <div className='btns'>
   <OutlineButton
   onClick={resetScore}
   >Reset</OutlineButton>
   <Button 
   onClick={()=>setShowRules((prev)=>!prev)}
   
   >{showRules?"Hide":"Show"} Rules</Button>
    </div>
    {showRules&&<Rules/>}
    </MainContainer>
  )
}


export default Game

const MainContainer=styled.main`
  
  .style{
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin:20px 70px;
  }
  .btns{
    margin-top: 40px ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

  }
`