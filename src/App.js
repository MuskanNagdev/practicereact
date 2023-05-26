import Pagetwo from "./components/Pagetwo";
import Pageone from "./components/Pageone";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import NestedCom from "./components/NestedCom";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import Admin from "./components/Admin";
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Pageone/>}></Route>
        <Route path="pagetwo" element={<Pagetwo/>}>
          <Route path="nestedcom" element={<NestedCom/>}></Route>
        </Route>
        {/* <Route path="navbar" element={<Navbar/>}></Route> */}
        <Route path="users" element={<Users/>}>
          <Route path=":userId" element={<UserDetail/>}></Route>
          <Route path="admin" element={<Admin/>}></Route>
       </Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
