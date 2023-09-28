import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./Courses/Courses";
import About from "./Aboutus/About";
import OopPython from "./OOPCourses/OOPPython";
import OppPython2 from "./OOPCourses/OOPPython2";
import OOPPython3 from "./OOPCourses/OOPPython3";
import OOPPython4 from "./OOPCourses/OOPPython4";
import OOPPython5 from "./OOPCourses/OOPPython5";
import OOPPython6 from "./OOPCourses/OOPPython6";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/courses" element={<Courses />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        {/* route to /courses/oop-python */}
        <Route
          exact
          path="/courses/oop-python/1"
          element={<OopPython />}
        ></Route>
        <Route
          exact
          path="/courses/oop-python/2"
          element={<OppPython2 />}
        ></Route>
        <Route
          exact
          path="/courses/oop-python/3"
          element={<OOPPython3 />}
        ></Route>
        <Route
          exact
          path="/courses/oop-python/4"
          element={<OOPPython4 />}
        ></Route>
        <Route
          exact
          path="/courses/oop-python/5"
          element={<OOPPython5 />}
        ></Route>
        <Route
          exact
          path="/courses/oop-python/6"
          element={<OOPPython6 />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
