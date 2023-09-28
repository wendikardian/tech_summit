import Home from "./Home/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Courses from "./Courses/Courses";
import About from "./Aboutus/About";
import OopPython from "./OOPCourses/OOPPython";
import OppPython2 from "./OOPCourses/OOPPython2";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/courses" element={<Courses />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        {/* route to /courses/oop-python */}
        <Route exact path="/courses/oop-python/1" element={<OopPython />}></Route>
        <Route exact path="/courses/oop-python/2" element={<OppPython2 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
