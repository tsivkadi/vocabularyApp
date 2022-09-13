import Pages from "./pages/Pages";
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;