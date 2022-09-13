import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
const baseURL = "http://localhost:5000/api/v1/words";

function List() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    getAllWords()
  }, []);

  const getAllWords = () => {
    axios.get(baseURL).then((response) => {
      setWords(response.data.words)
      console.log(words)
  }) 
}

  return (
    <Wrapper>
      {words.map((el)=>{
        if(words.length < 1){
          return(
            <p>Your words will be here</p>
          )
        }
        if(words.length > 1){
          return(
            <Link to={'/word/' + el._id} key={el._id} >
            <Containers>{el.title}</Containers>
            <Containers>{el.definition}</Containers>
            </Link>
          )}
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3em;

  a{
    display: flex;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    color: black;
    min-width: 20em;
    min-height: 2.5em;
    margin-top: 0.7em;
    background-color: white;
  }
`
const Containers = styled.div`
  max-width: 20em;
  height: auto;
`


export default List;