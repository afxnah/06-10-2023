import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transferdata from "./component/Transferdata";
import Course from "./component/course/Course";
import Login from "./component/login/Login";
import Logindata from "./component/login/Logindata";
import Home from "./component/Home/Home";
import Book from "./component/book/Book";

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
<Route path={'/'} element={<Login/>}></Route>
<Route path={'/Ldata'} element={<Logindata/>}></Route>
<Route path={'/Course'} element={<Course/>}></Route>
<Route path={'/Home'} element={<Home/>}></Route>
<Route path={'/Book'} element={<Book/>}></Route>

</Routes>
</BrowserRouter>



      {/* <Transferdata username="Afsana" password="afsana" usertype="admin"/> */}
    {/* <Login/> */}
    {/* <Course/> */}
    {/* <Home/> */}
    
    </div>
  );
}

export default App;
