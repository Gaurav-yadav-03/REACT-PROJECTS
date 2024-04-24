
import styled from 'styled-components'

const RoleDice = ({currentDice,roleDice}) => {
     


  return (
    <Dice>
        <div className='dice'onClick={roleDice}>
     <img src={`/images/Dice/dice_${currentDice}.png`}/></div>
    <p>click on the dice</p> 
    </Dice>
  )
}

export default RoleDice

const Dice=styled.div`
    margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }

`