import styled from 'styled-components'

export const Button=styled.button`
    background-color: black;
    color: aliceblue;
    border-radius: 5px;
    outline: none;
    border: none;
   padding: 10px 18px;
   font-size: 15px;
   min-width: 220px;
   cursor: pointer;
   transition: all ease .3s;

   &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
   }
`;
export const OutlineButton=styled(Button)`
background-color: white;
border: 1px solid black;
color:black;
 &:hover{
    background-color: black;
    border: 1px solid transparent;
    
   }
`;