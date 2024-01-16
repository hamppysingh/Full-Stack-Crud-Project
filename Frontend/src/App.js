import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Update from "./Components/Update";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/create' element={<Create></Create>}/>
        <Route path='/update/:Id' element={<Update></Update>}/>
      </Routes>
      </BrowserRouter>
  );
}
export default App;
