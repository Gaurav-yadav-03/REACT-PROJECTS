import React from 'react'
import styled from 'styled-components'

const Score = ({score}) => {
  return (
    <BoxContain>
        <h1>{score}</h1>
        <p>Total Score</p>
    </BoxContain>
  )
}

export default Score

const BoxContain= styled.div`
text-align: center;
max-width: 200px;

h1{
    font-size: 80px;
    line-height: 100px;
}
p{
    font-size: 20px;
}

`