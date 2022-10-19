import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
import Home from "./components/Home";
import CulturalHome from "./components/CulturalHome";
import CulturalItem from "./components/CulturalItem";
import axios from "axios";
import { useState, useEffect } from "react";
import CulturalSlider from "./components/CulturalSlider";
import Ex from "./components/Ex";
import CulturalShow from "./components/CulturalShow";
import CulturalList from "./components/CulturalList";
function App() {
  const APIKey =
    "APY5PtLu6PtpfHpFdMQLsouzb2GFaDyvR%2Fse%2Fsz2XXpgLfOSB8QjCMH%2FooWOfdNHWEoWcvulwyZAZPn9aPbanQ%3D%3D";
  const URL = `https://apis.data.go.kr/6480000/gyeongnamcultural/gyeongnamculturallist?serviceKey=${APIKey}&resultType=json`;
  const [cultural, setCurtural] = useState([]);

  useEffect(() => {
    const fetchData = async function (err) {
      const result = await axios.get(URL);
      if (err) {
        throw err;
      } else {
        setCurtural(result.data.gyeongnamculturallist.body.items.item);
        //   console.log(result.data.gyeongnamculturallist.body.items.item);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/cultural"
            // element={<CulturalHome cultural={cultural} />}
            element={<Ex />}
          >
            <Route index element={<CulturalHome cultural={cultural} />} />
            <Route
              path="show/:id"
              element={<CulturalShow cultural={cultural} />}
            />
            <Route path="list" element={<CulturalList cultural={cultural} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
