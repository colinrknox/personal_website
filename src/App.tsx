import "./App.css";
import Splash from "./splash/Splash";
import Tiles from "./tiles/Tiles";
import Page from "./page/Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<><Splash /><Tiles /></>} />
          <Route path="posts" element={<Tiles />} />
          <Route path="*" element={<Splash />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
