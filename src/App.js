import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ClientChannel2 from "./pages/ClientChannel2";
import { useEffect } from "react";
import MyCalendar from '../src/pages/calender/MyCalender'
import Module from "./table/Table";
import Table from "./table/Table";
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ClientChannel2 />} />
      <Route path="/calender" element={<MyCalendar />} />
      <Route path="/myChannel" element={<Table />} />
    </Routes>
  );
}
export default App;
