import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
//
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
//
import Home from "./components/Home";
import CulturalHome from "./components/CulturalHome";
import CulturalMain from "./components/CulturalMain";
import CulturalShow from "./components/CulturalShow";
import CulturalList from "./components/CulturalList";
//
import Surround from "./components/Surround";
import SrdFood from "./components/SrdFood";
import SrdTrans from "./components/SrdTrans";
import SrdHouse from "./components/SrdHouse";
//
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";
//
import "./App.css";
import LogoBack from "./components/LogoBack";
function App() {
  const APIKey =
    "APY5PtLu6PtpfHpFdMQLsouzb2GFaDyvR%2Fse%2Fsz2XXpgLfOSB8QjCMH%2FooWOfdNHWEoWcvulwyZAZPn9aPbanQ%3D%3D";
  const URL = `https://apis.data.go.kr/6480000/gyeongnamcultural/gyeongnamculturallist?serviceKey=${APIKey}&resultType=json`;
  const [cultural, setCurtural] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async function (err) {
    const result = await axios.get(URL);
    if (err) {
      throw err;
    } else {
      setCurtural(result.data.gyeongnamculturallist.body.items.item);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <BrowserRouter>
        <Header />
        <NavBar />
        <LogoBack />
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

          <Route path="/surround" element={<Surround />}>
            <Route index element={<SrdFood />} />
            <Route path="trans" element={<SrdTrans />} />
            <Route path="house" element={<SrdHouse />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
