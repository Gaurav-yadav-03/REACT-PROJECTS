import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'

const Home = ({toggle}) => {
  return (
    
    <Container>
        <div>
        <img
        src='/images/dices.png'
        /></div>
        <div className='box'>
        <h1>DICE GAME</h1>
        <Button
        onClick={toggle}>Play Now</Button>
        </div>
        
    </Container>
  )
}

export default Home

const Container=styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    margin: 0 auto;
  
    .box{
        h1{
            font-size: 100px;
            white-space: nowrap;
        }

    }

`;


