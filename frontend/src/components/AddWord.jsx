import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
const baseURL = "http://localhost:5000/api/v1/words";

function AddWord() {
  const [word, setWord] = useState({
    title: '',
    definition: ''
  });

  const updateInput = (e) => {
    setWord({...word,[e.target.name]: e.target.value})
  }
  const addInput = async (e) => {
    console.log(word)
    await axios.post(baseURL, word)
  }

  return (
    <Wrapper>
    <h2>Add new words!</h2>
    <form>
      <input type="text" name='title' placeholder="Title" onChange={updateInput}/>
      <input type="text" name='definition' placeholder="Definition" onChange={updateInput}/>
      <button onClick={addInput}>Add</button>
    </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  width: 28em;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  height: 8em;
  input{
    width: 10em;
    height: 2em;
    border: none;
    border-bottom: 1px solid gray;
    padding-left: 0.7em;
    margin-right: 0.6em;
  }
  input:focus{
    outline: none;
}
  button{
    width: 5em;
    height: 2em;
    background-color: black;
    color: white;
    border: none;
  }
`

export default AddWord;