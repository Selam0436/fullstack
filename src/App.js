import Home  from "./component/Home/Home";
import Nav from "./component/nav/nav";
import {Routes, Route,Navigate} from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from './component/context/Authcontext';
import Service from "./component/service/service"
import EditBook from "./component/editbook/editbook";
import Contact from "./component/contact/contact";
import AddBook from "./component/addbook/addbook";
import About from "./component/about/about";


const App=() =>{
  const { isAuthenticated } = useContext(AuthContext);
console.log('APP',isAuthenticated);
  return (
    <div className="App">
      
        <Nav/>      
        <Routes>
          <Route path="/" element={isAuthenticated ?<Service/>:<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/edit/:id" element={<EditBook/>}></Route>
          <Route path="/create" element={<AddBook/>}></Route>
        
        </Routes>          
    </div>
  );
}

export default App;