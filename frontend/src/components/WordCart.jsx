import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function WordCart() {
  const [word, setWord] = useState([]);
  const [isVisible, setVisible] = useState(false);
  const [changedWord, setChangedWord] = useState({
    title: '',
    definition: ''
  });

  const id  = useParams();

  const baseURL = `http://localhost:5000/api/v1/words/${id.id}`;

  useEffect(() => {
    getWord()
  }, [id.id]);

  const getWord = () => {
      axios.get(baseURL).then((response) => {
        setWord(response.data.word)
    })
    }
  const deleteWord = () => {
    axios.delete(baseURL).then((response) => {
  })
  }
  const openEditing = () => {
    setVisible(true)
  }
  const updateInput = (e) => {
    setChangedWord({...changedWord,[e.target.name]: e.target.value})
  }
  const edit = async (e) => {
    await axios.patch(baseURL, changedWord)
    setVisible(false)
  }

  return (
    <Wrapper>
    <div className="word-container">
      {isVisible ? (
        <form>
          <input type="text" name='title' placeholder="Title" onChange={updateInput}/>
          <input type="text" name='definition' placeholder="Definition" onChange={updateInput}/>
          <button onClick={edit}>Done</button>
        </form>
        ) : (
          <div>
          <h3>{word.title}</h3>
          <p>{word.definition}</p>
          </div>
      )
      }
    </div>
    <div className="button-container">
    <Button onClick={openEditing}>Edit</Button>
    <Button onClick={deleteWord}>Delete</Button>
    </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 9em;
  display: flex;
  flex-direction: column;
  width: 30em;
  height: 15em;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  svg{
    color: white;
  }
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
const Button = styled.button`
  width: 6em;
  height: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  color: white;
  border: none;
`

export default WordCart;