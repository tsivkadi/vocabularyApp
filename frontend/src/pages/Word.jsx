import WordCart from "../components/WordCart";
import { Link } from "react-router-dom";

function Word() {
  return (
    <div>
      <Link to={'/'} className='logo' >Vocabulary</Link>
      <WordCart />
    </div>
  );
}

export default Word;