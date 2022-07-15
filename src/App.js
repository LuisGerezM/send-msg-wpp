import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./App.styled";
import { Home } from "./views/Home/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
