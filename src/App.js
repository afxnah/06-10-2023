import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transferdata from "./component/Transferdata";
import Course from "./component/course/Course";
import Login from "./component/login/Login";
import Logindata from "./component/login/Logindata";

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
<Route path={'/'} element={<Login/>}></Route>
<Route path={'/Home'} element={<Logindata/>}></Route>
<Route path={'/Course'} element={<Course/>}></Route>

</Routes>
</BrowserRouter>



      {/* <Transferdata username="Afsana" password="afsana" usertype="admin"/> */}
    {/* <Login/> */}
    {/* <Course/> */}
    </div>
  );
}

export default App;
