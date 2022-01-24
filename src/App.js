import './App.css';
import NavBar from "./NavBarComponent/NavBar";
import { Route, Routes } from "react-router-dom";
import ShowStudent from './Components/ShowStudent';
import DeleteStudent from './Components/DeleteStudent';
import AddStudent from './Components/AddStudent';
import UpdateStudent from './Components/UpdateStudent';
import SearchStudent from './Components/SearchStudent';
import Footer from './FooterComponent/Footer';

function App() {
  
  return (
    <div style={{bottom:'0'}}>
      <header>
        <NavBar></NavBar>
      </header>

      <Routes>
        <Route path="/students/showall" element={<ShowStudent />}></Route>
        <Route path="/students/delete/:id" element={<DeleteStudent />}></Route>
        <Route path="/students/add" element={<AddStudent />}></Route>
        <Route path="/students/update/:id" element={<UpdateStudent />}></Route>
        <Route path="/students/search/:id" element={<SearchStudent />}></Route>
      </Routes>
      <div >
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
