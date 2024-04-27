import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import SearchResult from './components/SearchResult/SearchResult';


export const BASE_URL="http://localhost:9000"

const App = () => {

  const[data,setData]=useState(null);
  const[filtered,setFiltered]=useState(null);
  const[loading,setLoading]=useState(false)
  const[error,setError]=useState(null)
  const[selectedBtn,setSelectedBtn]=useState("all");

  
  //  fetchData()
  useEffect(() => {
    const fetchData=async()=>{
      setLoading(true)
       try{
        const response=await fetch(BASE_URL);
        const json =await response.json();
       
        setData(json);
        setFiltered(json);
        setLoading(false);
       }catch(error){
        setError("unable to fetch data")
  
       }
     }
     fetchData();
  }, [])

  
  
  const searchFood=(e)=>{
    const searchValue=e.target.value;
    if(searchValue===""){
      setFiltered(null);
    }
    const filter=data?.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase()));
    setFiltered(filter);
  }
  const FilterData=(type)=>{
   if(type==="all"){
    setFiltered(data);
    setSelectedBtn("all");
    return;
   }

   const filter=data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()));
   setFiltered(filter);
   setSelectedBtn(type);
  }
  const filteredbtn=[
  {
    name:"all",
    type:"all",
  },
  {
    name:"Breakfast",
    type:"Breakfast",
  },
  {
    name:"Lunch",
    type:"Lunch",
  },
  {
    name:"Dinner",
    type:"Dinner",
  }]

   if(error) return <div>{error}</div>
   if(loading)return <div>loading.....</div>
  return (
    <><Container>
    <TopContainer>
      <div className="logo">
       <img src="/logo.svg" alt="" />
      </div>
      <div className="search">
        <input onChange={searchFood}placeholder="Search Food" />
      </div>
    </TopContainer>
    <Filter>
      {
        filteredbtn.map((value)=>(<Button 
           isSelected={selectedBtn===value.type}
          key={value.name} onClick={()=> FilterData(value.type)}>{value.name}</Button>))
      }

    </Filter>
   
  </Container>
   <SearchResult data={filtered}/>
    </>
  )
}

export default App

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      &::placeholder {
        color: white;
      }
    }
  }

  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;
  }
`;

const Filter = styled.section`
  display: flex;
  justify-content: center;
  
  gap: 12px;
  padding-bottom: 40px;
`;
export const Button = styled.button`
 
  background-color: ${({ isSelected }) => (isSelected ?  "#ed0404":"#bd1818" )};
 outline: 1px solid ${({ isSelected }) => (isSelected ?  "white":"#bd1818" )};
  color: white;
 
  border-radius: 5px;
  padding: 4px 16px;
  border: none;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 12px;
  }
`;

