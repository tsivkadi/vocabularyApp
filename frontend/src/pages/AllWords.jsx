import List from "../components/List";
import AddWord from "../components/AddWord";
import { Link } from "react-router-dom";

function AllWords() {
  return (
    <div>
      <Link to={'/'} className='logo' >Vocabulary</Link>
      <AddWord />
      <List />
    </div>
  )
}

export default AllWords