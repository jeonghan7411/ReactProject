import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
import Home from "./components/Home";
import CulturalHome from "./components/CulturalHome";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import CulturalMain from "./components/CulturalMain";
import CulturalShow from "./components/CulturalShow";
import CulturalList from "./components/CulturalList";
function App() {
  const APIKey =
    "APY5PtLu6PtpfHpFdMQLsouzb2GFaDyvR%2Fse%2Fsz2XXpgLfOSB8QjCMH%2FooWOfdNHWEoWcvulwyZAZPn9aPbanQ%3D%3D";
  const URL = `https://apis.data.go.kr/6480000/gyeongnamcultural/gyeongnamculturallist?serviceKey=${APIKey}&resultType=json`;
  const [cultural, setCurtural] = useState([]);

  const fetchData = async function (err) {
    const result = await axios.get(URL);
    if (err) {
      throw err;
    } else {
      setCurtural(result.data.gyeongnamculturallist.body.items.item);
      //   console.log(result.data.gyeongnamculturallist.body.items.item);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const searchResult = () => {
  //   const searchFilter = (item) => {
  //     if (item === "content") {
  //       return cultural.CONTENT.split(" ")
  //         .join("")
  //         .includes(search.split(" ").join("") && item);
  //     }
  //     const copy = [...cultural];
  //     const searchRender =
  //       searchSelect === "all"
  //         ? copy
  //         : copy.filter((item) => searchFilter(item));
  //     return searchRender;
  //   };
  // };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home cultural={cultural} />} />

          <Route
            path="/cultural"
            // element={<CulturalHome cultural={cultural} />}
            element={<CulturalMain />}
          >
            <Route index element={<CulturalHome cultural={cultural} />} />
            <Route path="list" element={<CulturalList cultural={cultural} />} />
            <Route
              path="show/:id"
              element={<CulturalShow cultural={cultural} />}
            />
            <Route
              path="list/show/:id"
              element={<CulturalShow cultural={cultural} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
