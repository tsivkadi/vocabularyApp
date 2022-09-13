import AllWords from "./AllWords";
import Word from "./Word";
import { Routes, Route } from 'react-router-dom';

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<AllWords/>}/>
        <Route path="word/:id" element={<Word/>}/>
      </Routes>
  );
}

export default Pages;